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
export async function POST(request) {
  try {
    const { username, color } = await request.json();

    if (!username || !color) {
      return NextResponse.json({ error: 'Le nom d\'utilisateur et la couleur sont requis' }, { status: 400 });
    }

    const tempPassword = generateRandomPassword();
    const hashedTempPassword = await bcrypt.hash(tempPassword, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        color,
        role: "user",
        temp_password: hashedTempPassword,
      },
    });

    return NextResponse.json({ user: newUser, tempPassword }, { status: 201 }); // `tempPassword` peut être envoyé pour montrer le mot de passe généré, si besoin
  } catch (error) {
    console.error('Erreur côté serveur:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de l\'utilisateur' }, { status: 500 });
  }
}