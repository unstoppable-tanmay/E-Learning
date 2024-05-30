/* eslint-disable @next/next/no-img-element */
import React from "react";

const Course = () => {
  return (
    <div className="w-[clamp(100px,250px,90vw)] flex flex-col gap-1 cursor-pointer">
      <div className="img-wrapper w-full aspect-[1/.6] relative group overflow-hidden rounded-lg">
        <img
          src="/assets/course.webp"
          alt=""
          className="w-full h-full object-cover rounded-lg bg-black/5 group-hover:scale-110 duration-200 z-0"
        />
        <div className="absolute w-full h-full bg-black/70 z-10 text-white">Author</div>
      </div>
      <div className="title font-semibold text-lg">Some Title</div>
      <div className="desc text-[#aaabaf] text-sm font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, quod.
      </div>
    </div>
  );
};

export default Course;
