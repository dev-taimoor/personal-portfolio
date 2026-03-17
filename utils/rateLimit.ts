// utils/rateLimit.ts
interface RateLimitStore {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitStore>();

export function rateLimit(identifier: string, limit: number = 5, windowMs: number = 15 * 60 * 1000) {
  const now = Date.now();
  const record = store.get(identifier);

  // Clean up old records
  if (record && now > record.resetTime) {
    store.delete(identifier);
  }

  const current = store.get(identifier);

  if (!current) {
    store.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return {
      success: false,
      remaining: 0,
      retryAfter: Math.ceil((current.resetTime - now) / 1000),
    };
  }

  current.count++;
  return { success: true, remaining: limit - current.count };
}

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of store.entries()) {
    if (now > value.resetTime) {
      store.delete(key);
    }
  }
}, 60 * 60 * 1000);
