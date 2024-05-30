/*
  Warnings:

  - Added the required column `progressMark` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `enrollment` ADD COLUMN `progressMark` VARCHAR(191) NOT NULL;
