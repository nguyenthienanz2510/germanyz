
// const middleware = () => {
// //   const { nextUrl, geo } = req;
// //   const country = geo?.country || 'Viet Nam';
// //   nextUrl.searchParams.set('country', country);
// //   return NextResponse.rewrite(nextUrl);
// };

import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// import { GetPostsDocument } from "./generated/graphql";
// import client from "./lib/apolloClient";

// export default middleware;

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const res = NextResponse.next();
    let ip = request.ip ?? request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    if(!ip && forwardedFor){
      ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    } 

    // const { data: latestPosts } = await client.query({
    //     query: GetPostsDocument,
    //     variables: {
    //       quantity: 5,
    //     },
    // })

    // console.log("MIDDLEWARE", latestPosts)
    if(ip){
      res.cookies.set("user-ip", ip, {
        httpOnly: false,
      });
      res.cookies.set("test-set-cookie-ne", 'value-test-set-cookie-ne', {
        httpOnly: false,
      });
    }
    
    return res;
  }