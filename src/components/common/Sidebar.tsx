/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  BsFillGridFill,
  BsFillPlayBtnFill,
  BsGrid,
  BsPlayBtn,
} from "react-icons/bs";
import { FaArrowLeft, FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiCog6Tooth, HiOutlineCog6Tooth } from "react-icons/hi2";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  if (pathname == "/") return <></>;

  const match = () => {
    return /\/dashboard\/[a-z0-9]*/
  }

  return (
    <div className="absolute md:static z-[5000]">
      <motion.nav
        animate={open ? { marginLeft: "0px" } : { marginLeft: "-250px" }}
        transition={{ bounce: 0.15 }}
        className="w-[clamp(250px,250px,80vw)] h-screen bg-[#f7f8fc] flex flex-col gap-4 justify-between items-center flex-shrink-0 mr-5 relative self-start"
      >
        <motion.div
          animate={
            open
              ? {
                  translateX: "0%",
                  right: "0px",
                  opacity: 0,
                  pointerEvents: "none",
                }
              : {
                  translateX: "100%",
                  right: "-15px",
                  opacity: 1,
                  pointerEvents: "all",
                }
          }
          className="hamburger absolute top-4 -z-0"
          onClick={(e) => setOpen(true)}
        >
          <HiMenuAlt1 className="text-2xl" />
        </motion.div>
        <div className="top flex flex-col gap-10 p-6 w-full flex-shrink-0">
          <div className="heading font-semibold text-2xl flex items-center justify-between">
            E-Learn
            <FaArrowLeft
              className="text-xl cursor-pointer text-[#aaabaf]"
              onClick={(e) => {
                setOpen(false);
              }}
            />
          </div>
          <div className="menu flex flex-col gap-6 font-semibold text-[#aaabaf]">
            <div className="item flex gap-2 items-center cursor-pointer relative">
              {pathname == "/dashboard" ? (
                <>
                  <div className="bottomsheet absolute w-1 bg-[#706fe7] h-[130%] -right-7 rounded-r-full"></div>
                  <BsFillGridFill className="text-xl text-[#706fe7]" />
                  <span className="text-[#706fe7]">Dashboard</span>
                </>
              ) : (
                <Link href={'/dashboard'} className="w-full flex items-center gap-2">
                  <BsGrid className="text-xl" />
                  <span className="text-[#aaabaf]">Dashboard</span>
                </Link>
              )}
            </div>
            <div className="item flex gap-2 items-center cursor-pointer relative">
              {/\/dashboard\/[a-z0-9]*/.test(pathname) ? (
                <>
                  <div className="bottomsheet absolute w-1 bg-[#706fe7] h-[130%] -right-7 rounded-r-full"></div>
                  <FaBookmark className="text-xl text-[#706fe7]" />
                  <span className="text-[#706fe7]">My Courses</span>
                </>
              ) : (
                <Link href={'/dashboard/courses'} className="w-full flex items-center gap-2">
                  <FaRegBookmark className="text-xl" />
                  <span className="text-[#aaabaf]">My Courses</span>
                </Link>
              )}
            </div>
            <div className="item flex gap-2 items-center cursor-pointer relative">
              {pathname == "/courses" ? (
                <>
                  <div className="bottomsheet absolute w-1 bg-[#706fe7] h-[130%] -right-7 rounded-r-full"></div>
                  <BsFillPlayBtnFill className="text-xl text-[#706fe7]" />
                  <span className="text-[#706fe7]">All Courses</span>
                </>
              ) : (
                <Link href={'/courses'} className="w-full flex items-center gap-2">
                  <BsPlayBtn className="text-xl" />
                  <span className="text-[#aaabaf]">All Courses</span>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="bottom flex w-full p-6 pb-4 font-semibold text-[#aaabaf] flex-col gap-6 flex-shrink-0">
          <div className="ad flex-shrink-0 w-full rounded-xl bg-[#706fe7]/20 p-4 px-6 flex flex-col items-center justify-around gap-4">
            <img
              src="/assets/illustration.png"
              alt=""
              className="w-full aspect-[1/.8] object-contain bg-blend-multiply rounded-lg"
            />
            <div className="desc font-normal text-[#aaabaf] text-center">
              Full of 1000+ <br /> Lectures
            </div>
            <div className="button w-full rounded-lg border-2 border-[#706fe7]/60 px-2 py-1 flex items-center justify-center text-[#706fe7]">
              Upgrade
            </div>
          </div>
          <div className="item flex gap-2 items-center cursor-pointer relative">
            {pathname == "/settings" ? (
              <>
                <div className="bottomsheet absolute w-1 bg-[#706fe7] h-[130%] -right-7 rounded-r-full"></div>
                <HiCog6Tooth className="text-xl text-[#706fe7]" />
                <span className="text-[#706fe7]">Settings</span>
              </>
            ) : (
              <Link href={'/settings'} className="w-full flex items-center gap-2">
                <HiOutlineCog6Tooth className="text-xl" />
                <span className="text-[#aaabaf]">Settings</span>
              </Link>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
