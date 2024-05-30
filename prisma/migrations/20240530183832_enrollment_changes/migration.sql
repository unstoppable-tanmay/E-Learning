/*
  Warnings:

  - You are about to drop the column `lessonId` on the `enrollment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,courseId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sl]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sl` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `enrollment` DROP FOREIGN KEY `Enrollment_lessonId_fkey`;

-- DropIndex
DROP INDEX `Enrollment_userId_courseId_lessonId_key` ON `enrollment`;

-- AlterTable
ALTER TABLE `enrollment` DROP COLUMN `lessonId`;

-- AlterTable
ALTER TABLE `lesson` ADD COLUMN `sl` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Enrollment_userId_courseId_key` ON `Enrollment`(`userId`, `courseId`);

-- CreateIndex
CREATE UNIQUE INDEX `Lesson_sl_key` ON `Lesson`(`sl`);
