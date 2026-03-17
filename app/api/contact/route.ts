import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations';
import ContactEmail from '@/emails/ContactEmail';

// In-memory rate limiting
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3;
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < windowMs);
  if (recent.length >= maxRequests) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  // Try other common headers for IP detection
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  const clientIP = request.headers.get('x-client-ip');
  if (clientIP) {
    return clientIP;
  }

  return 'unknown';
}

function isSpam(message: string): boolean {
  const spamKeywords = ['casino', 'crypto', 'viagra', 'loan', 'click here', 'free money'];
  const lowerMessage = message.toLowerCase();
  if (spamKeywords.some(k => lowerMessage.includes(k))) return true;
  const urlRegex = /https?:\/\/[^\s]+/g;
  const urls = message.match(urlRegex) || [];
  if (urls.length > 2 || (message.length > 0 && urls.join('').length / message.length > 0.4)) return true;
  return false;
}

function isValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const allowedDomain = process.env.NODE_ENV === 'production' ? 'https://your-portfolio-domain.com' : 'http://localhost:3000'; // Update for production
  if (origin && !origin.startsWith(allowedDomain)) return false;
  if (referer && !referer.startsWith(allowedDomain)) return false;
  return true;
}

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection
    if (!isValidOrigin(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: securityHeaders });
    }

    // Rate Limiting
    const ip = getClientIP(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again in an hour.' }, { status: 429, headers: { ...securityHeaders, 'Retry-After': '3600' } });
    }

    // Parse and Validate Input
    const body = await request.json();
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400, headers: securityHeaders });
    }

    const { name, email, message, website } = validation.data;

    // Honeypot Check
    if (website && website.trim()) {
      return NextResponse.json({ success: true }, { status: 200, headers: securityHeaders }); // Silent success
    }

    // Spam Protection
    if (isSpam(message)) {
      return NextResponse.json({ error: 'Message rejected' }, { status: 400, headers: securityHeaders });
    }

    // Send Email
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const timestamp = new Date().toISOString();
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      react: ContactEmail({ name, email, message, timestamp }),
    });

    return NextResponse.json({ success: true }, { status: 200, headers: securityHeaders });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: securityHeaders });
  }
}