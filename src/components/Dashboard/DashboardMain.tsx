import React from "react";
import Navigation from "./component/Navigation";
import Course from "./component/Course";
import { Divider } from "@nextui-org/react";

const DashboardMain = () => {
  return (
    <section className="w-full h-screen overflow-hidden bg-white flex flex-col pl-4">
      <Navigation lebel="Back" link="" />
      <div className="heading font-bold text-xl md:text-2xl pl-3 py-3">
        Purchased Courses
      </div>
      <div className="flex gap-3 overflow-y-scroll">
        <div className="courses-container flex flex-wrap gap-6 md:gap-16 w-full justify-evenly  overflow-y-scroll p-3">
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
        <Divider orientation="vertical" className="lg:flex hidden" />
        <div className="right lg:flex flex-col w-[clamp(100px,300px,90vw)] hidden text-base md:text-lg gap-3">
          <div className="item flex gap-2 font-medium">
            <span className="font-semibold text-[#aaabaf]">Total Course -</span> 12
          </div>
          <div className="item flex gap-2 font-medium">
            <span className="font-semibold text-[#aaabaf]">Total Progress -</span> 60%
          </div>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            non!
          </span>
        </div>
      </div>
    </section>
  );
};

export default DashboardMain;
