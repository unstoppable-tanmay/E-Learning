'use client'

import Signin from "@/components/modals/Signin";
import Signup from "@/components/modals/Signup";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";


export default function Home() {
  const session = useSession();

  useEffect(()=>{
    console.log(session)
    if(session.status=="authenticated"){
      toast.error("You are already logged in")
      redirect('/dashboard')
    }
  },[session])
  return (
    <main className="w-full min-h-screen flex items-center justify-center gap-3 text-white">
      <Signup/>
      <Signin/>
    </main>
  );
}
