import { NextRequest, NextResponse } from "next/server";



export function middleware(request: NextRequest){ 
  // if(!request.cookies.get("next-auth.session-token")){
  //   return NextResponse.redirect(new URL('/auth/signin', request.url)) 
  // }
}

export const config = {
  matcher: '/dashboard/:path*',
}