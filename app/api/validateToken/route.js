import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req) {
  const token = req.cookies.get('authToken');

  if (!token) {
    return NextResponse.json({ error: 'Token manquant' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({ valid: true, decoded }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
  }
}
