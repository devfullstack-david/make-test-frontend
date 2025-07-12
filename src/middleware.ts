import { NextRequest, NextResponse } from "next/server";
import { decodeJWT } from "./services/decodeJwt";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const isProtectedRoute = request.nextUrl.pathname.startsWith('/auth');

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token) {
        const payload = decodeJWT(token);

        if (!payload || !payload.exp) return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/auth/:path'],
}