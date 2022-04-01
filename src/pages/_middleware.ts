import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(
  req: NextRequest,
  ev: NextFetchEvent,
  res: NextResponse
) {
  const url = req.nextUrl.clone();
  const token = req.cookies['@Ioasy:accessToken'];

  if (url.pathname === '/' && token) {
    url.pathname = '/livros';

    return NextResponse.redirect(url);
  }

  if (url.pathname === '/livros' && !token) {
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
