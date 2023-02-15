/*
  Warnings:

  - You are about to drop the `_pipelinetopipelineroute` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pipelineId` to the `PipelineRoute` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_pipelinetopipelineroute` DROP FOREIGN KEY `_PipelineToPipelineRoute_A_fkey`;

-- DropForeignKey
ALTER TABLE `_pipelinetopipelineroute` DROP FOREIGN KEY `_PipelineToPipelineRoute_B_fkey`;

-- AlterTable
ALTER TABLE `pipelineroute` ADD COLUMN `pipelineId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_pipelinetopipelineroute`;

-- AddForeignKey
ALTER TABLE `PipelineRoute` ADD CONSTRAINT `PipelineRoute_pipelineId_fkey` FOREIGN KEY (`pipelineId`) REFERENCES `Pipeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
