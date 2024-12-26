/*
  Warnings:

  - You are about to drop the `Droit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Grade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Societe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserParrams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Droit`;

-- DropTable
DROP TABLE `Event`;

-- DropTable
DROP TABLE `Grade`;

-- DropTable
DROP TABLE `Societe`;

-- DropTable
DROP TABLE `UserParrams`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `nom` VARCHAR(191) NULL,
    `prenom` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `verifiedEmail` BOOLEAN NOT NULL DEFAULT false,
    `token` VARCHAR(191) NULL,
    `dateValidToken` DATETIME(3) NULL,
    `password` VARCHAR(191) NULL,
    `tempPassword` VARCHAR(191) NOT NULL,
    `exterieur` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
