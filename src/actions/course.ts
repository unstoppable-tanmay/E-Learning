"use server";

import prisma from "../../prisma/prisma";
import { courseType, enrollments, lessonType } from "@/types/types";
import z, { ZodError } from "zod";

const courseSchema = z.object({
  name: z.string().min(3, { message: "Name should atleast 3 character long" }),
  description: z.string(),
  image: z.string(),
  price: z.string(),
});

export const createCourse = async (course: courseType, userId: string) => {
  try {
    const parsedBody = courseSchema.safeParse(course);

    if (!parsedBody.success)
      return { success: false, message: parsedBody.error.issues[0].message };

    const courseData = await prisma.course.create({
      data: {
        name: course.name!,
        description: course.description,
        image: course.image,
        price: course.price!,
        authorId: userId,
      },
    });

    return { success: true, data: courseData, message: "Created Successfully" };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, message: error.message };
    } else {
      console.log(error);
      return { success: false, message: "Internal server error" };
    }
  }
};

export const updateCourse = async (course: courseType, courseId: string) => {
  try {
    const parsedBody = courseSchema.safeParse(course);

    if (!parsedBody.success)
      return { success: false, message: parsedBody.error.issues[0].message };

    const courseData = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        name: course.name!,
        description: course.description,
        image: course.image,
        price: course.price!,
      },
    });

    return { success: true, data: courseData, message: "Updated Successfully" };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, message: error.message };
    } else {
      console.log(error);
      return { success: false, message: "Internal server error" };
    }
  }
};

export const deleteCourse = async (courseId: string) => {
  try {
    const coursedata = await prisma.course.delete({
      where: {
        id: courseId,
      },
    });

    return { success: true, data: coursedata, message: "Deleted Successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Internal server error" };
  }
};

export const getCourse = async (courseId: string,userId:string) => {
  try {
    const data = await prisma.course.findFirst({
      where: {
        id: courseId,
      },
      include: {
        lessons: true,
        enrollments:{
          where:{
            courseId,
            userId
          }
        }
      },
    });

    return { success: true, data: data, message: "" };
  } catch (error) {
    return { success: false, data: null, message: "Internal Error" };
  }
};

export const getSomeCourse = async (search: string = "", userId?: string) => {
  try {
    const data = await prisma.course.findMany({
      where: {
        name: {
          contains: search,
          startsWith: search,
        },
        NOT: {
          enrollments: {
            some: {
              userId,
            },
          },
        },
      },
    });

    return { success: true, data: data, message: "" };
  } catch (error) {
    return { success: false, data: null, message: "Internal Error" };
  }
};

export const enrollCourse = async (courseId: string, userId: string) => {
  try {
    const data = await prisma.enrollment.create({
      data: {
        userId,
        courseId,
        progressMark: "",
      },
    });

    return { success: true, data: data, message: "" };
  } catch (error) {
    return { success: false, data: null, message: "Internal Error" };
  }
};

export const progressMarkr = async (
  courseId: string,
  lessonsNo: string,
  userId: string,
  enrollment: enrollments
) => {
  try {
    // const enrollment = await prisma.enrollment.findUnique({
    //   where:{
    //     userId,
    //     courseId
    //   }
    // })
    const data = await prisma.enrollment.update({
      where: {
        courseId,
        userId,
      },
      data: {
        progress: {
          increment: 1,
        },
        progressMark: enrollment?.progressMark + "," + lessonsNo,
      },
    });

    return { success: true, data: data, message: "Marked As Complete" };
  } catch (error) {
    return { success: false, data: null, message: "Internal Error" };
  }
};
