"use client";

import React, { useState } from "react";
import { account } from "@/utils/validators";
import ImageUploader from "@/components/ImageUploader";
import { Formik, FormikValues } from "formik";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileSkeleton } from "@/components/Skeletons";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";
import { useSession } from "next-auth/react";

function ProfileContent() {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = getAuth(app);
  const { data: session, update } = useSession();

  const handleSubmit = async (values: FormikValues, event: any) => {
    try {
      setIsLoading(true);
      if (session?.user) {
        update({
          ...session,
          user: {
            ...session?.user,
            name: values?.name,
            image: values?.image,
            email: values?.email,
          },
        }).then(() => {
          if (currentUser) {
            updateProfile(currentUser, {
              displayName: values?.name,
              photoURL: values?.image,
            });
          }
        });
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
    } finally {
      setIsLoading(false);
    }
  };

  if (!session?.user || isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <Formik
      initialValues={{ ...session?.user }}
      validationSchema={account}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end mt-5 mb-16">
            <Button type="submit">Update</Button>
          </div>
          <div className="flex flex-col md:flex-row md:gap-20">
            <div className="flex flex-col gap-5">
              <Input name="name" placeholder="Full Name" />
              <Input name="email" placeholder="E-mail" />
            </div>
            <ImageUploader
              name="image"
              initialValue={
                session?.user?.image
                  ? session?.user?.image
                  : "/images/upload-img-fallback.png"
              }
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default ProfileContent;
