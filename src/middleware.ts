import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In-memory store for rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now > data.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 60000);

export async function middleware(request: NextRequest) {
  // Get the IP address of the request
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0] ?? "127.0.0.1";

  // Check if the request is for an API route
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const now = Date.now();
    const windowMs = 60000; // 1 minute window
    const maxRequests = 10; // 100 requests per minute

    // Get or initialize rate limit data for this IP
    const rateLimitData = rateLimitStore.get(ip) || {
      count: 0,
      resetTime: now + windowMs,
    };

    // Reset if window has passed
    if (now > rateLimitData.resetTime) {
      rateLimitData.count = 0;
      rateLimitData.resetTime = now + windowMs;
    }

    // Check if limit exceeded
    if (rateLimitData.count >= maxRequests) {
      return new NextResponse(
        JSON.stringify({
          error: "Too many requests",
          reset: rateLimitData.resetTime,
          remaining: 0,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": maxRequests.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitData.resetTime.toString(),
          },
        }
      );
    }

    // Increment counter and update store
    rateLimitData.count++;
    rateLimitStore.set(ip, rateLimitData);

    // Add rate limit headers to successful responses
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", maxRequests.toString());
    response.headers.set(
      "X-RateLimit-Remaining",
      (maxRequests - rateLimitData.count).toString()
    );
    response.headers.set(
      "X-RateLimit-Reset",
      rateLimitData.resetTime.toString()
    );
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
