import { NextRequest, NextResponse } from 'next/server';

const middleware = (req: NextRequest) => {
  const { nextUrl, geo } = req;
  console.log(nextUrl);
  const country = geo?.country || 'Viet Nam';
  nextUrl.searchParams.set('country', country);
  return NextResponse.rewrite(nextUrl);
};

export default middleware;
