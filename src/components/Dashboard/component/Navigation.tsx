import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  link: string;
  lebel: string;
  search?: boolean;
  account?: boolean;
};

const Navigation = ({ link, lebel, search = true, account = true }: Props) => {
  return (
    <nav className="left w-full items-center flex px-2 pr-4 py-2 justify-between">
      <Link
        href={link}
        className="navigation flex gap-1 items-center font-medium text-[#706fe7] invisible md:visible"
      >
        <IoIosArrowBack className="text-xl text-[#aaabaf]" />
        {lebel}
      </Link>
      <div className="right flex items-center gap-4">
        {search && <CiSearch className="text-2xl cursor-pointer" />}
        {account && (
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="cursor-pointer" />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
