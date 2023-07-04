"use client";

import React, { useState } from "react";
import UserAuthForm from "./UserAuthForm";
import { loginValidationSchema } from "@/utils/validators";
import { FormikValues } from "formik";
import { Input } from "@/components/ui/input";
import { Icons } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { signIn } from "next-auth/react";
import Loader from "./Loader";

function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (values: FormikValues) => {
    setLoading(true);
    try {
      await signIn("credentials", {
        email: values?.email,
        password: values?.password,
        redirect: false,
      }).then((response) => {
        if (!response?.error) {
          router.push("/");
        } else {
          console.log(response?.error);
          toast({
            title: "Invalid Credentials",
            description: response?.error,
            variant: "destructive",
          });
        }
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserAuthForm
      validationSchema={loginValidationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      submitText="Login"
    >
      {loading && <Loader />}

      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col items-center mb-16">
          <Icons.logo className="mb-8" />
          <p className="text-xl mb-2">Welcome back!</p>
          <p className="text-brand-black-30">Login to your account</p>
        </div>
        <div className="flex flex-col w-full text-right">
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Password" type="password" />
          <div>
            <Link
              href="/reset-password"
              className="text-brand-primary-100 text-sm"
            >
              Recover Password
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 my-10 text-sm">
            <p className="text-brand-black-30">Don`t have an account?</p>
            <Link href="/register" className=" text-brand-primary-100">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </UserAuthForm>
  );
}

export default Login;
