/*
  Warnings:

  - You are about to drop the column `accessToken` on the `account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `accessToken`,
    ADD COLUMN `access_token` VARCHAR(191) NULL;
