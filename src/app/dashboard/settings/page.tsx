import Navigation from "@/components/Dashboard/component/Navigation";
import { Button } from "@nextui-org/button";
import React from "react";

const Page = () => {
  return (
    <section className="w-full flex flex-col gap-6 h-full items-center">
      <Navigation lebel="Back" link="/dashboard" search={false} />
      <div className="wrapper flex w-full h-full items-center flex-col gap-6 justify-center">
        <Button>Edit Your Profile</Button>
        <Button>Forgot Password</Button>
        <Button>Reset Password</Button>
        These function are yet to come...
      </div>
    </section>
  );
};

export default Page;
