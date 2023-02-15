/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `Pipeline` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `PipelineType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `uid` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `uid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Company_uid_key` ON `Company`(`uid`);

-- CreateIndex
CREATE UNIQUE INDEX `Pipeline_uid_key` ON `Pipeline`(`uid`);

-- CreateIndex
CREATE UNIQUE INDEX `PipelineType_uid_key` ON `PipelineType`(`uid`);

-- CreateIndex
CREATE UNIQUE INDEX `User_uid_key` ON `User`(`uid`);
