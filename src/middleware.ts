import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.url.includes("/static/")) {
    return NextResponse.rewrite(new URL("/api/static", request.url));
  }

  if (request.url.includes("/example/")) {
    return NextResponse.rewrite(new URL("/api/example", request.url));
  }
}

export const config = {
  matcher: ["/static/:path*", "/example/:path*"],
};
