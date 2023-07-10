"use client";

import React from "react";
import { account } from "@/utils/validators";
import ImageUploader from "@/components/ImageUploader";
import { Formik, FormikValues } from "formik";
import { toast } from "@/components/ui/use-toast";
import { useUserStore } from "@/store/useUser";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileSkeleton } from "@/components/Skeletons";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";

function ProfileContent() {
  const { loading, updateProfile, user } = useUserStore();
  const { currentUser } = getAuth(app);

  const handleSubmit = async (values: FormikValues, event: any) => {
    try {
      if (currentUser) {
        updateProfile(currentUser, values);
      }
      toast({
        title: "Success",
        description: "Profile updated successfully",
        variant: "success",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message,
        variant: "destructive",
      });
    }
  };

  if (!user || loading) {
    return <ProfileSkeleton />;
  }

  return (
    <Formik
      initialValues={{ ...user }}
      validationSchema={account}
      onSubmit={handleSubmit}
    >
      {({ values, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end w-full mt-5 mb-16">
            <Button type="submit">Update</Button>
          </div>
          <div className="flex gap-20">
            <div className="w-96">
              <Input name="displayName" placeholder="Full Name" />
              <Input name="email" placeholder="E-mail" />
            </div>
            <ImageUploader
              initialValue={user?.photoURL ? user?.photoURL : ""}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default ProfileContent;
