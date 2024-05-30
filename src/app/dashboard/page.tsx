"use client";

import DashboardMain from "@/components/Dashboard/DashboardMain";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  const session = useSession();

  //   if (session.status == "unauthenticated") {
  //     redirect("/");
  //   }

  console.log(session.data);

  return <DashboardMain />;
};

export default Page;
