// mark as client component
"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useRecoilState } from "recoil";
import { userAtom } from "@/atom/atom";

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    console.log(session)
    if (session.status == "authenticated" && session.data) {
      setUser(session.data.data);
    }
    if (session.status == "unauthenticated") {
      toast.error("You are not logged in");
      redirect("/");
    }
  }, [session, setUser]);

  useEffect(()=>{
    console.log(user)
  },[user])

  return <>{children}</>;
};

export default AuthChecker;
