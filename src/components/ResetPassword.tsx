"use client";

import React, { useState } from "react";
import UserAuthForm from "./UserAuthForm";
import { resetPassword } from "@/utils/validators";
import { FormikValues } from "formik";
import { Input } from "@/components/ui/input";
import { Icons } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import Loader from "./Loader";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";

function ResetPasword() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const auth = getAuth(app);

  const handleSubmit = async (values: FormikValues) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, values?.email);
      toast({
        title: "Password reset email sent successfully",
        description: `An email with password reset instructions is sent to ${values?.email}`,
        variant: "success",
      });
      router.push("/login");
    } catch (error: any) {
      toast({
        title: error?.message,
        description: "Error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserAuthForm
      validationSchema={resetPassword}
      initialValues={{ fullName: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      submitText="Reset Password"
    >
      {loading && <Loader />}

      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col items-center mb-16">
          <Icons.logo className="mb-8" />
          <p className="text-xl mb-2">Reset Your Password</p>
          <p className="text-brand-black-30">
            Enter your email to reset your password
          </p>
        </div>
        <div className="flex flex-col w-full mb-10 text-right">
          <Input name="email" placeholder="E-mail" />
          <div className="flex items-end justify-end gap-1 text-sm lg:my-5">
            <p className="text-brand-black-30">Remember your password?</p>
            <Link href="/login" className=" text-brand-primary-100">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </UserAuthForm>
  );
}

export default ResetPasword;
