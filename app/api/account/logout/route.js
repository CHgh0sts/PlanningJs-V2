import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({ message: 'Déconnexion réussie' });

    response.cookies.set('authToken', '', {
        maxAge: 0,
        path: '/',
    });

    return response;
}
