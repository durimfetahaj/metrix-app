"use client";

import React from "react";
import { password } from "@/utils/validators";
import { Formik, FormikValues } from "formik";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getAuth, updatePassword } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";

function Password() {
  const handleSubmit = async (values: FormikValues) => {
    const { currentUser } = getAuth(app);

    if (currentUser) {
      try {
        updatePassword(currentUser, values?.newPassword);
        toast({
          title: "Password updated successfully",
          variant: "success",
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error?.message,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "User not authenticated",
        variant: "destructive",
      });
    }
  };

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={password}
      onSubmit={handleSubmit}
    >
      {({ values, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end mt-5 mb-16">
            <Button type="submit">Update</Button>
          </div>

          <div className="flex flex-col lg:w-1/3">
            <Input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
            />
            <Input
              type="password"
              name="newPassword"
              placeholder="New Password"
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Password;
