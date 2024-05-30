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
} from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Signin = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const change = (value: string, key: "email" | "password") => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log(user);
  };
  const handleGoogleSignin = () => {
    signIn("google");
  };

  return (
    <>
      <Button onPress={onOpen} className="text-black bg-gray-300">
        Sign In
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Hello User!
              </ModalHeader>
              <ModalBody>
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
              </ModalBody>
              <ModalFooter className="justify-center flex col">
                <Button color="primary" onPress={handleSubmit}>
                  Log In
                </Button>
                <Button
                  color="default"
                  className="border-2 border-black/20"
                  onPress={handleGoogleSignin}
                >
                  <FaGoogle /> Google
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signin;
