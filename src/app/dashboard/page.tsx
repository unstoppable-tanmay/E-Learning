"use client";

import { userAtom } from "@/atom/atom";
import Course from "@/components/Dashboard/component/Course";
import Navigation from "@/components/Dashboard/component/Navigation";
import CreateCourse from "@/components/modals/CreateCourse";
import { Button, CircularProgress, Divider } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const Page = () => {
  const session = useSession();
  const [user, setUser] = useRecoilState(userAtom);

  console.log(user);

  return session.status == "loading" ? (
    <div className="w-full h-full flex items-center justify-center font-bold text-4xl">
      Loading
    </div>
  ) : (
    <section className="w-full h-screen overflow-hidden bg-white flex flex-col pl-4">
      <Navigation lebel="Back" link="" />
      <div className="heading font-bold text-xl md:text-2xl pl-3 pr-4 py-3 flex justify-between items-center">
        {user.role == "USER" ? (
          "Purchased Courses"
        ) : (
          <>
            Created Courses <CreateCourse />
          </>
        )}
      </div>
      <div className="flex gap-3 overflow-y-scroll flex-1">
        <div className="courses-container flex flex-wrap gap-6 md:gap-16 w-full justify-evenly  overflow-y-scroll p-3">
          {user.role == "ADMIN" ? (
            user.createdCourses ? (
              user.createdCourses.length ? (
                user.createdCourses.map((e, i) => {
                  return <Course key={i} data={e} />;
                })
              ) : (
                "No Data Found"
              )
            ) : (
              <>
                <div className="wrapper flex flex-col gap-4 flex-1 items-center justify-center">
                  No Data Found
                  <CreateCourse />
                </div>
              </>
            )
          ) : user.enrollments ? (
            user.enrollments.length ? (
              user.enrollments.map((e, i) => {
                // return <></>;
                return <Course key={i} data={e.course!} purchase />;
              })
            ) : (
              <>
                <div className="wrapper flex flex-col gap-4 flex-1 items-center justify-center">
                  No Data Found
                  <Link href={"/dashboard/courses"}>
                    <Button>Purchase Course</Button>
                  </Link>
                </div>
              </>
            )
          ) : (
            <>No Data Found</>
          )}
        </div>
        {user.role == "USER" && (
          <Divider orientation="vertical" className="lg:flex hidden" />
        )}
        {user.role == "USER" && (
          <div className="right lg:flex flex-col w-[clamp(100px,300px,90vw)] hidden text-base md:text-lg gap-3">
            <div className="item flex gap-2 font-medium items-center">
              <CircularProgress
                size="md"
                value={user.enrollments?.reduce((p, c) => p + c.progress, 0)}
                color="success"
                showValueLabel={true}
                maxValue={user.enrollments?.length}
              />
              Progress
            </div>
            <div className="item flex gap-2 font-medium items-center">
              <CircularProgress
                size="md"
                value={user.enrollments?.length}
                color="warning"
                showValueLabel={true}
                maxValue={20}
              />
              All Courses
            </div>
            <span className="text-sm">
              You can purchase 20 courses, to buy more upgrade your account
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
