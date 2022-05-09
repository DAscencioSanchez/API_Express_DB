/*
  Warnings:

  - You are about to drop the column `name` on the `mission` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "mission_name_key";

-- AlterTable
ALTER TABLE "mission" DROP COLUMN "name",
ADD COLUMN     "missionName" TEXT NOT NULL DEFAULT E'mission';
