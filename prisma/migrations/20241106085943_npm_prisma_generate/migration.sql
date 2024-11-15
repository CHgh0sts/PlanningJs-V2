-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "societeId" INTEGER,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "verifiedEmail" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "temp_password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("color", "createdAt", "email", "id", "password", "role", "societeId", "temp_password", "updatedAt", "username") SELECT "color", "createdAt", "email", "id", "password", "role", "societeId", "temp_password", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
