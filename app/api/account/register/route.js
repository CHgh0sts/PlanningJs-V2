import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
    const genererChaineAleatoire = (longueur) => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let chaine = '';
        for (let i = 0; i < longueur; i++) {
            chaine += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return chaine;
    };

    try {
        const body = await request.json();
        const { username, email, color, password } = body;

        const tempPassword = password || genererChaineAleatoire(8);
        const hashedPassword = await bcrypt.hash(tempPassword, 10);

        // Création d'utilisateur
        const newUser = await prisma.user.create({
            data: {
                username,
                color,
                email: email || null,
                password: hashedPassword,
                temp_password: password ? '' : tempPassword,
                role: "1",
            },
        });

        return NextResponse.json(
            { user: newUser, tempPassword: password ? null : tempPassword },
            { status: 201 }
        );
    } catch (e) {
        // Gestion des erreurs Prisma
        console.error(e);

        if (e.code === 'P2031') {
            return NextResponse.json(
                { error: 'MongoDB nécessite un Replica Set pour cette opération.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Erreur lors de la création du user.' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
