export type userType = {
  name?: string;
  email: string;
  password?: string;
  role: "ADMIN" | "USER";
  education?: string;
  tags: string[];
};

export type courseType = {
  id?: string;

  authorId: string;
  author?: userType;

  name: string;
  description: string;
  price: string;
  image: string;

  progress: string;
};

export type lessonType = {
  id?: string;
  courseId?: string;

  titel: string;
  description: string;

  type: "VIDEO" | "PDF" | "QUIZ";

  video?: string;
  pdf?: string;
  quiz?: JSON;

  additional?: string;
};
