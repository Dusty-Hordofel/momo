import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// client and server side protection
export const config = {
  matcher: ["/dashboard/:path*", "/api/users/:path*", "/api/admins/:path*"],
};

export default withAuth(
  async function middleware(request) {
    // authorize roles
    const url = request.nextUrl.pathname;
    const userRole = request?.nextauth?.token?.role;

    // client side protection
    if (url?.includes("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (url?.includes("/user") && userRole !== "user") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  },

  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
        return true;
      },
    },
  }
);
