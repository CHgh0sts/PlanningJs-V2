import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { remove } from 'nprogress';

export async function GET(req) {
    const token = req.cookies.get('authToken');
    if (!token) return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    try {
        const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
        const me = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });

        if (!me) return NextResponse.json({ error: 'Utilisateur introuvable ou rôle manquant' }, { status: 404 });

        let parrams = await prisma.userParrams.findUnique({
            where: {userId: me.userId},
            include: { Societe: true }
        })
        if(!parrams) {
            parrams = await prisma.userParrams.create({
                data: {
                    userId: me.userId,
                    societeId: 1
                },
            });
        }
        Object.assign(me, parrams);
        const roleIds = me.role.split('/').map(Number).filter(Boolean);

        const grades = await prisma.grade.findMany({
        where: { id: { in: roleIds } },
        select: { listDroit: true },
        });

        if (grades.length === 0) return NextResponse.json({ error: 'Aucun grade associé trouvé' }, { status: 406 });

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

        me.listDroits = Array.from(uniqueDroits);
        // Vérifie si `0` est dans `me.listDroits`
        let users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                userId: true,
            }
        });
        users = users.filter(async user => {
            const paramsUser = await prisma.userParrams.findUnique({
                where: { userId: user.userId },
                include: { Societe: true }
            });
            Object.assign(user, paramsUser);
            if (!me.listDroits.includes(1) && user.societeId !== me.societeId) {
                return false;
            }
            return true;
        })
        users.forEach(user => {
            user.options = []
            if(me.listDroits.includes(1) || me.listDroits.includes(11)) {
                user.options.push("grade")
            }
            if(user.userId !== me.userId && (me.listDroits.includes(1) || me.listDroits.includes(12))) {
                user.options.push("delete")
            }
        })
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors de la mise à jour du profil' }, { status: 500 });
    }
}