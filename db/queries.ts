import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { cache } from "react";
import { courses, userProgress } from "@/db/schema";
import { eq } from "drizzle-orm";

const { userId } = auth();
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});

export const getUserProgress = cache(async () => {
  if (!userId) {
    return null;
  }
  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
  return data;
});

export const getProgressById = cache(async (CoursesId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, CoursesId),
  });
  return data;
});
