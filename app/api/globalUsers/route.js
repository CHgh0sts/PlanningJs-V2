import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(req) {
  try {
    
    let response = await prisma.user.findMany({
        select: {
          id: true,
          username: true,
          userId: true,
        },
    });

    const filteredResponse = await Promise.all(
      response.map(async (user) => {
        const parrams = await prisma.userParrams.findUnique({
          where: { userId: user.userId },
        });
        if (!parrams) {
          return null;
        }
        Object.assign(user, parrams);
        return user;
      })
    );
    response = filteredResponse.filter((user) => user !== null);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}