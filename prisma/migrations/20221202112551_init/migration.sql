/*
  Warnings:

  - Added the required column `address` to the `Pipeline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pipeline` ADD COLUMN `address` VARCHAR(1000) NOT NULL;
