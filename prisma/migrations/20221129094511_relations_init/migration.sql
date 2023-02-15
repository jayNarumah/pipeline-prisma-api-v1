/*
  Warnings:

  - You are about to drop the column `pipelineId` on the `pipelineroute` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `pipelineroute` DROP FOREIGN KEY `PipelineRoute_pipelineId_fkey`;

-- AlterTable
ALTER TABLE `pipelineroute` DROP COLUMN `pipelineId`;

-- CreateTable
CREATE TABLE `_PipelineToPipelineRoute` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PipelineToPipelineRoute_AB_unique`(`A`, `B`),
    INDEX `_PipelineToPipelineRoute_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PipelineToPipelineRoute` ADD CONSTRAINT `_PipelineToPipelineRoute_A_fkey` FOREIGN KEY (`A`) REFERENCES `Pipeline`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PipelineToPipelineRoute` ADD CONSTRAINT `_PipelineToPipelineRoute_B_fkey` FOREIGN KEY (`B`) REFERENCES `PipelineRoute`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
