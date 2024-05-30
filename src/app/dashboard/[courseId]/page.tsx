"use client";

import Lesson from "@/components/Dashboard/component/Lesson";
import Navigation from "@/components/Dashboard/component/Navigation";
import { CircularProgress, Divider } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as NavigationModule } from "swiper/modules";
import Player from 'react-player'

const Page = ({ params }: { params: { courseId: string } }) => {
  const [render, setRender] = useState(false);
  const nextEl = useRef<HTMLDivElement>(null);
  const prevEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <section className="w-full h-screen overflow-hidden bg-white flex flex-col pl-4">
      <Navigation lebel="Back" link="" />
      <div className="heading font-bold text-xl md:text-2xl pl-3 pb-3">
        Product Analysis
      </div>
      <div className="flex overflow-y-scroll flex-1 gap-3 justify-center">
        <div className="course-container flex-1 flex flex-col w-[200px] gap-3 pb-4">
          <div className="player w-full flex-1 bg-black/5 rounded-xl relative overflow-hidden max-h-[210px] md:max-h-max">
            <Player width={"100%"} height={"100%"} controls url={"https://www.youtube.com/watch?v=yis-Tj25R0U"}/>
          </div>
          <div className="text-lg font-semibold">Lessons</div>
          <Swiper
            // onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[NavigationModule]}
            // navigation={{
            //   nextEl: nextEl.current,
            //   prevEl: prevEl.current,
            //   enabled: true,
            // }}
            centeredSlides
            loop
            autoplay
            className="w-full select-none mask-class"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 70,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
            <SwiperSlide key={""}>
              <Lesson />
            </SwiperSlide>
          </Swiper>
        </div>
        <Divider orientation="vertical" className="lg:flex hidden" />
        <div className="right lg:flex flex-col w-[clamp(100px,300px,90vw)] flex-shrink-0 hidden text-base md:text-lg gap-3">
          <div className="item flex gap-2 font-medium items-center">
            <CircularProgress
              size="md"
              value={60}
              color="success"
              showValueLabel={true}
              maxValue={100}
            />
            Progress
          </div>
          <div className="item flex gap-2 font-medium items-center">
            <CircularProgress
              size="md"
              value={8}
              color="success"
              showValueLabel={true}
              maxValue={18}
            />
            Lessons Left - (12 of 18)
          </div>
          <span className="text-sm">
            Complete the lessons here total lessons are 18 and you have
            completed 8 of them.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Page;
