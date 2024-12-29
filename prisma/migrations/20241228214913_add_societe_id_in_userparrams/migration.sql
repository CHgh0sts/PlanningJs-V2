-- AlterTable
ALTER TABLE "planning"."UserParrams" ADD COLUMN     "societeId" INTEGER;

-- AddForeignKey
ALTER TABLE "planning"."UserParrams" ADD CONSTRAINT "UserParrams_societeId_fkey" FOREIGN KEY ("societeId") REFERENCES "planning"."Societe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
