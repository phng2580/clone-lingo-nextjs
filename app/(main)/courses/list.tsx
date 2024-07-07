"use client";

import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCoursesId?: typeof userProgress.$inferSelect.activeCourseId;
};
export const List = ({ courses, activeCoursesId }: Props) => {
  const router = useRouter();
  const [pending, transition] = useTransition();
  const onClick = (id: number) => {
    if (pending) return;
    if (id === activeCoursesId) {
      return router.push("/learn");
    }
    startTransition(() => {
      upsertUserProgress;
    });
  };

  return (
    <>
      <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={() => {}}
            disabled={false}
            active={course.id === activeCoursesId}
          />
        ))}
      </div>
    </>
  );
};
