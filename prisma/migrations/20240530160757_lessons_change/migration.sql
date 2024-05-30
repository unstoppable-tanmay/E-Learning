-- AlterTable
ALTER TABLE `course` MODIFY `description` VARCHAR(400) NOT NULL,
    MODIFY `image` VARCHAR(400) NOT NULL;

-- AlterTable
ALTER TABLE `lesson` MODIFY `additional` VARCHAR(191) NULL;
