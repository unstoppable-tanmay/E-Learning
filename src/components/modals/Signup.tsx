"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Tabs,
  Tab,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { handleSignUp } from "@/actions/auth";
import { userType } from "@/types/types";
import { tags } from "@/contsants/constant";
import { toast } from "react-toastify";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, { message: "Name should atleast 3 character long" }),
  email: z.string().email({ message: "Not a valid email" }),
  password: z.string().min(8, { message: "Password is too small" }),
  role: z.enum(["USER", "ADMIN"]),
  education: z.string().optional(),
  tags: z.string(),
});

const Signup = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [user, setUser] = useState<userType>({
    name: "",
    email: "",
    password: "",
    role: "USER",
    education: "",
    tags: "",
  });

  const change = (
    value: any,
    key: "name" | "email" | "password" | "role" | "education" | "tags"
  ) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    let parsedData = userSchema.safeParse(user);
    if (!parsedData.success) {
      console.log(parsedData.error.errors);
      console.log(user);
      return toast(parsedData.error.errors[0].message, { type: "warning" });
    }
    const res = await handleSignUp(user);
    if (!res.success) toast(res.message, { type: "error" });
    else {
      onClose();
      toast("Signed Up", { type: "success" });
    }
  };

  return (
    <>
      <Button onPress={onOpen} className="text-black bg-gray-300">
        Sign Up
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Welcome To Elearning...
              </ModalHeader>
              <ModalBody>
                <Tabs
                  aria-label="Options"
                  selectedKey={user.role}
                  onSelectionChange={(e) => change(e as string, "role")}
                >
                  <Tab key="USER" value="USER" title="Student">
                    <div className="wrapper flex flex-col gap-3">
                      <Input
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => change(e.target.value, "email")}
                      ></Input>
                      <Input
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => change(e.target.value, "password")}
                      ></Input>
                      <Input
                        placeholder="Name"
                        value={user.name}
                        onChange={(e) => change(e.target.value, "name")}
                      ></Input>
                      <Input
                        placeholder="Education"
                        value={user.education}
                        onChange={(e) => change(e.target.value, "education")}
                      ></Input>

                      <Select
                        label="Can Select More Than One"
                        placeholder="Select Some Tags"
                        selectionMode="multiple"
                        className="w-full"
                        onSelectionChange={(e) => change(Array.from(e).join(','), "tags")}
                      >
                        {tags.map((tag) => (
                          <SelectItem key={tag}>{tag}</SelectItem>
                        ))}
                      </Select>
                    </div>
                  </Tab>
                  <Tab key="ADMIN" value="ADMIN" title="Tutor">
                    <div className="wrapper flex flex-col gap-3">
                      <Input
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => change(e.target.value, "email")}
                      ></Input>
                      <Input
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => change(e.target.value, "password")}
                      ></Input>
                      <Input
                        placeholder="Name"
                        value={user.name}
                        onChange={(e) => change(e.target.value, "name")}
                      ></Input>
                      <Input
                        placeholder="Education"
                        value={user.education}
                        onChange={(e) => change(e.target.value, "education")}
                      ></Input>
                      <Select
                        label="Can Select More Than One"
                        placeholder="Select Some Tags"
                        selectionMode="multiple"
                        className="w-full"
                        onSelectionChange={(e) => change(Array.from(e).join(','), "tags")}
                      >
                        {tags.map((tag) => (
                          <SelectItem key={tag}>{tag}</SelectItem>
                        ))}
                      </Select>
                    </div>
                  </Tab>
                </Tabs>
              </ModalBody>
              <ModalFooter className="">
                <Button color="primary" onPress={handleSubmit}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
