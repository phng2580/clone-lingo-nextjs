import { FeedWapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";

import { getUserProgress } from "@/db/queries";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/VN.png" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWapper>
        <Header title="Việt Nam" />
      </FeedWapper>
    </div>
  );
};

export default LearnPage;
