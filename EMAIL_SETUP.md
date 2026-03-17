# Email & Security Setup Guide

## Overview

The contact form has been implemented with production-ready security and email functionality:

- **Email Provider**: Resend (free tier, reliable delivery)
- **Email Templates**: Professional HTML emails using React Email
- **Security Layers**:
  - Server-side input validation with Zod
  - Rate limiting (3 requests per IP per hour)
  - Honeypot spam protection
  - Spam keyword and URL filtering
  - CSRF protection via Origin/Referer validation
  - Security headers on all responses
- **Frontend**: React Hook Form with real-time validation and accessibility features

## Email Template Features

The `emails/ContactEmail.tsx` template includes:
- Professional dark header with sender initials avatar
- Sender name, email, and timestamp
- Formatted message body
- "Reply to Sender" CTA button
- Footer branding: "Sent from Taimoor Ahmad's Portfolio"

Emails are sent from: `Portfolio Contact <onboarding@resend.dev>`
Reply-to: Sender's email address

## Security Implementation Details

### 1. Input Validation (Zod Schema)
- **Name**: 2-50 characters, HTML tags stripped
- **Email**: Valid email format, max 100 characters
- **Message**: 10-1000 characters, HTML tags stripped
- **Honeypot**: Optional `website` field for bot detection

### 2. Rate Limiting
- **Limit**: 3 requests per IP address per hour
- **Implementation**: In-memory Map (resets on server restart)
- **Response**: 429 status with `Retry-After: 3600` header
- **IP Detection**: Handles `x-forwarded-for` header for proxies

### 3. Spam Protection
- **Honeypot**: Silently rejects submissions with filled `website` field
- **Keywords**: Blocks messages containing: "casino", "crypto", "viagra", "loan", "click here", "free money"
- **URL Limits**: Rejects messages with >40% URLs or >2 links

### 4. CSRF Protection
- Validates `Origin` and `Referer` headers
- Currently configured for `http://localhost:3000` (development)
- **Production Update Required**: Change `allowedDomain` in `app/api/contact/route.ts`

### 5. Security Headers
Applied to all API responses:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
```

### 6. Global Security (Middleware)
Applied to all routes via `middleware.ts`:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...
X-DNS-Prefetch-Control: on
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Testing Locally

The development server is running on port 3001. Test the contact form:

```bash
# Test successful submission
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message with sufficient length for validation.",
    "website": ""
  }'
# Expected: {"success":true}

# Test rate limiting (submit 4 times quickly)
# 4th request should return: {"error": "Too many requests. Please try again in an hour."}

# Test honeypot
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bot",
    "email": "bot@example.com",
    "message": "Spam message",
    "website": "http://spam-site.com"
  }'
# Expected: {"success":true} (silently ignored, no email sent)

# Test validation
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"","email":"invalid","message":"short"}'
# Expected: {"error": "Invalid input data"}
```

## Production Deployment

### 1. Update Domain Configuration

Before deploying, update the allowed domain in `app/api/contact/route.ts`:

```typescript
const allowedDomain = process.env.NODE_ENV === 'production'
  ? 'https://your-portfolio-domain.com'  // Replace with your actual domain
  : 'http://localhost:3000';
```

### 2. Deploy to Vercel/Netlify/etc.

The project is ready for deployment. Environment variables are already set locally.

### 3. Set Environment Variables in Production

On your hosting platform (Vercel, Netlify, etc.), set:
- `RESEND_API_KEY`: `string_key`
- `CONTACT_EMAIL`: `email_address`
- `NODE_ENV`: `production`

### 4. Test in Production

After deployment:
1. Visit your live site
2. Submit a test contact form
3. Check your email (taimoor220297@gmail.com) for the formatted email
4. Verify the reply-to address works

## Files Implemented

### Core Files
- `lib/validations.ts` - Zod schema for validation
- `emails/ContactEmail.tsx` - React Email template
- `app/api/contact/route.ts` - Secure API endpoint
- `components/Contact.tsx` - Frontend form with React Hook Form
- `middleware.ts` - Global security headers

### Configuration
- `.env.local` - Environment variables (already configured)
- `package.json` - Dependencies installed

## Customization Options

### Change Rate Limits
Edit `app/api/contact/route.ts`:
```typescript
const maxRequests = 5; // Change from 3 to 5
const windowMs = 60 * 60 * 1000; // 1 hour
```

### Modify Email Template
Edit `emails/ContactEmail.tsx` to customize:
- Colors, fonts, layout
- Add company logo
- Change footer text

### Add Form Fields
1. Update `contactSchema` in `lib/validations.ts`
2. Add field to `Contact.tsx` form
3. Update email template to display new field

### Update Spam Keywords
Edit the `spamKeywords` array in `app/api/contact/route.ts`

## Troubleshooting

### Email Not Sending
- Check Resend dashboard for API key status
- Verify `CONTACT_EMAIL` is set correctly
- Check server logs for detailed errors

### Rate Limiting Too Strict
- Temporarily increase limits for testing
- Check IP detection logic for proxies

### CSRF Errors in Production
- Ensure `allowedDomain` matches your production URL
- Include protocol (https://)

### Validation Errors
- Message must be ≥10 characters
- Email must be valid format
- Check browser console for client-side validation

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run build`

## Monitoring

### Logs
- Server logs show rate limit hits, validation failures, email errors
- Client console shows form validation states

### Email Delivery
- Resend provides delivery analytics
- Check spam folder initially
- Emails include proper reply-to headers

## Security Best Practices

✅ **Server-side validation only** - Client validation is UX, server is security
✅ **No sensitive data in errors** - Generic messages prevent enumeration
✅ **Rate limiting** - Prevents abuse and spam
✅ **Honeypot + content filtering** - Multi-layer spam protection
✅ **CSRF protection** - Prevents cross-origin attacks
✅ **Security headers** - Defense in depth
✅ **HTTPS required** - Email providers require secure connections

The contact form is now production-ready with enterprise-level security!
