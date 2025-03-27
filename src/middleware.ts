import { NextResponse } from "next/server";

const protectedRoutes = ['/products/:path*', '/cart', '/']
export function middleware(request: any) {
    // Get token or user info from cookies
    const loggedInUser = request.cookies.get("loggedInUser");
    console.log("loggedInUser", loggedInUser);

    if (!loggedInUser) {
        if (request.nextUrl.pathname !== "/login") {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next(); // Continue the request
}



export const config = {
    // matcher: [...protectedRoutes]
    matcher:  ['/products/:path*', '/cart', '/']
}