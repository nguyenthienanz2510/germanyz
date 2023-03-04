
// const middleware = () => {
// //   const { nextUrl, geo } = req;
// //   const country = geo?.country || 'Viet Nam';
// //   nextUrl.searchParams.set('country', country);
// //   return NextResponse.rewrite(nextUrl);
// };

import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// export default middleware;

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const res = NextResponse.next();
    let ip = request.ip ?? request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    if(!ip && forwardedFor){
      ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    } 

    console.log("MIDDLEWARE", ip)
    if(ip){
      res.cookies.set("user-ip", ip, {
        httpOnly: false,
      });
      res.cookies.set("test-ne", 'test-ne', {
        httpOnly: false,
      });
    }
    
    return res;
  }