import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const genererNombreAleatoire = (longueur) => {
  const max = Math.pow(10, longueur) - 1; // Le plus grand nombre avec "longueur" chiffres
  const nombreAleatoire = Math.floor(Math.random() * (max + 1)); // Nombre aléatoire entre 0 et max
  return nombreAleatoire.toString().padStart(longueur, '0'); // Ajoute des zéros à gauche si nécessaire
};
export async function POST(request) {
  try {
    const { nom, prenom, email } = await request.json();

    if (!nom || !prenom || !email) {
      return NextResponse.json({ error: 'Le nom d\'utilisateur et la couleur sont requis' }, { status: 400 });
    }

    const userId = genererNombreAleatoire(10)

    const newUser = await prisma.user.create({
      data: {
        username: `${nom} ${prenom}`,
        exterieur: true,
        tempPassword: '',
        userId: userId,
      },
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error('Erreur côté serveur:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de l\'utilisateur' }, { status: 500 });
  }
}