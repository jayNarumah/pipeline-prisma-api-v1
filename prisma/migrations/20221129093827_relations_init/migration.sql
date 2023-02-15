/*
  Warnings:

  - Added the required column `lat` to the `PipelineRoute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `PipelineRoute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pipelineId` to the `PipelineRoute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pipeline` ADD COLUMN `companyId` INTEGER NULL;

-- AlterTable
ALTER TABLE `pipelineroute` ADD COLUMN `lat` DOUBLE NOT NULL,
    ADD COLUMN `lng` DOUBLE NOT NULL,
    ADD COLUMN `pipelineId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Pipeline` ADD CONSTRAINT `Pipeline_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PipelineRoute` ADD CONSTRAINT `PipelineRoute_pipelineId_fkey` FOREIGN KEY (`pipelineId`) REFERENCES `Pipeline`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
