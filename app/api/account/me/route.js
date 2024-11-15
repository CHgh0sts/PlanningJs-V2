import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  const token = req.cookies.get('authToken');

  if (!token) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        color: true,
      },
    });

    if (!user || !user.role) {
      return NextResponse.json({ error: 'Utilisateur introuvable ou rôle manquant' }, { status: 404 });
    }

    // Vérifier et convertir `user.role` en tableau d'IDs
    const roleIds = user.role.split('/').map(Number).filter(Boolean);

    if (roleIds.length !== 0) {
      
    }

    // Récupération des grades par IDs
    const grades = await prisma.grade.findMany({
      where: { id: { in: roleIds } },
      select: { listDroit: true },
    });

    if (grades.length === 0) {
      return NextResponse.json({ error: 'Aucun grade associé trouvé' }, { status: 406 });
    }

    const uniqueDroits = new Set();

    grades.forEach((grade) => {
      if (grade.listDroit) {
        grade.listDroit.split('/').forEach((droitId) => {
          uniqueDroits.add(Number(droitId));
        });
      }
    });

    if (uniqueDroits.size === 0) {
      return NextResponse.json({ error: 'Aucun droit trouvé' }, { status: 404 });
    }

    user.listDroits = Array.from(uniqueDroits);

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Erreur JWT ou serveur :', error);
    return NextResponse.json({ error: 'Token invalide ou expiré' }, { status: 401 });
  }
}
