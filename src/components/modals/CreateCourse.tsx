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
  Textarea,
} from "@nextui-org/react";
import { courseType } from "@/types/types";

const CreateCourse = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [course, setCourse] = useState<courseType>({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const change = (
    value: any,
    key: "name" | "description" | "image" | "price"
  ) => {
    setCourse((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // const res = await handleSignUp(user)
    // console.log(res)
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
                Create Course
              </ModalHeader>
              <ModalBody>
                <div className="wrapper flex flex-col gap-3">
                  <Input
                    placeholder="Name"
                    value={course.name}
                    onChange={(e) => change(e.target.value, "name")}
                  ></Input>
                  <Textarea
                    placeholder="Description"
                    value={course.description}
                    onChange={(e) => change(e.target.value, "description")}
                  ></Textarea>
                  <Input
                    placeholder="Image Link"
                    value={course.image}
                    onChange={(e) => change(e.target.value, "image")}
                  ></Input>
                  <Input
                    placeholder="Price"
                    value={course.price}
                    onChange={(e) => change(e.target.value, "price")}
                  ></Input>
                </div>
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

export default CreateCourse;
