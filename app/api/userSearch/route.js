import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  try {
    let users;

    if (username && username.trim() !== '') {
      users = await prisma.user.findMany({
        where: {
          username: {
            contains: username,
          },
        },
      });
    } else {
      users = await prisma.user.findMany();
    }
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Erreur côté serveur:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des utilisateurs ou des événements' }, { status: 500 });
  }
}