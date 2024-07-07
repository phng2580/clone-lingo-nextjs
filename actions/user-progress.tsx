"use server";

import db from "@/db/drizzle";
import { getProgressById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser;
  if (!userId || !user) {
    throw new Error("unauthorized");
  }
  const courses = await getProgressById(courseId);
  if (!courses) {
    throw new Error("course not found");
  }
  const existingUserProgress = await getUserProgress();
  if (existingUserProgress) {
    await db.update(userProgress).set({
        activeCourseId: courseId
    });
  }
};
