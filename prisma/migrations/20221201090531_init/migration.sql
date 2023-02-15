/*
  Warnings:

  - Made the column `pipelineTypeId` on table `pipeline` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyId` on table `pipeline` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pipeline` DROP FOREIGN KEY `Pipeline_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `pipeline` DROP FOREIGN KEY `Pipeline_pipelineTypeId_fkey`;

-- AlterTable
ALTER TABLE `pipeline` MODIFY `pipelineTypeId` INTEGER NOT NULL,
    MODIFY `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(1000) NOT NULL,
    ADD COLUMN `salt` VARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE `Pipeline` ADD CONSTRAINT `Pipeline_pipelineTypeId_fkey` FOREIGN KEY (`pipelineTypeId`) REFERENCES `PipelineType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pipeline` ADD CONSTRAINT `Pipeline_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
