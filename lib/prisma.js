import { PrismaClient as GlobalPrismaClient } from '../prisma/prisma-global';
import { PrismaClient as ProjectPrismaClient } from '../prisma/prisma-project';

export const globalPrisma = new GlobalPrismaClient();
export const projectPrisma = new ProjectPrismaClient();
