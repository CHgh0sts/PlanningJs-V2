import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    
    const response = await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          role: true,
          color: true,
          exterieur: true,
        },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}