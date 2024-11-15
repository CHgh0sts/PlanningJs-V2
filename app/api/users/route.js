import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { userId } = req.nextUrl.searchParams;

    let response;

    if (userId) {
      response = await prisma.user.findUnique({
        where: { id: parseInt(userId, 10) },
        select: {
          id: true,
          username: true,
          role: true,
          color: true,
        },
      });

      if (!response) {
        return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
      }
    } else {
      response = await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          role: true,
          color: true,
        },
      });
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
