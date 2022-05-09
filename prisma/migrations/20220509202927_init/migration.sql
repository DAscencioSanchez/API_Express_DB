/*
  Warnings:

  - You are about to drop the column `missionName` on the `mission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `mission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `mission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mission" DROP COLUMN "missionName",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "mission_name_key" ON "mission"("name");
