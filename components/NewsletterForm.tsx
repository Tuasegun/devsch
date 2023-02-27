import React, { useState, useRef } from "react";
import {
  Input,
  Button,
  Flex,
    useDisclosure
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import SuccessModal from './SuccessModal'

export const NewsletterForm = () => {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxfqV9gxwYkQ0thjPYxw_TZCpTho8lkAZxkoB0PRWjx-0C9y3Rc3TOPA6G46vXq2qaG/exec";
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
     <SuccessModal
        isOpen={isOpen}
        onClose={onClose}
        title="Thank you for subscribing."
        description="You have been added to our mailing list."
      />
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
      })}
      onSubmit={(values, action) => {
        const formData = new FormData();
        formData.append("email", values.email as string);
        formData.append("created_at", new Date().toLocaleString());
        fetch(scriptUrl, { method: "POST", body: formData }).then(
          (response) => {
            if (response.status === 201 || 200) {
              action.resetForm();
                onOpen();
            } else {
              alert("Something went wrong, please try again");
            }
          }
        );
      }}
    >
      {(formik) => (
        <Flex
          as="form"
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Input
            id="email"
            name="email"
            placeholder="Email Address"
            type="email"
            background="#fff"
            border={
              formik.errors.email && formik.touched.email
                ? "1px solid #f56565"
                : "1px solid #e2e8f0"
            }
            _focusVisible={{
                outline: "none",
              }}
            width="60%"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button
            width="40%"
            fontSize="1.125rem"
            fontWeight="400"
            borderRadius="0"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Subscribe
          </Button>
        </Flex>
      )}
    </Formik>
    </>
  );
};
