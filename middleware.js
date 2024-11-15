import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_PATHS = ['/login', '/register', '/account/confirmEmail'];

export async function middleware(req) {
  const token = req.cookies.get('authToken');
  const pathname = req.nextUrl.pathname;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET); // Encode la clé secrète
    const { payload } = await jwtVerify(token.value, secretKey);
    return NextResponse.next();
  } catch (error) {
    console.error('Token invalide ou expiré:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
