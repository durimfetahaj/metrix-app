"use client";

import React, { useState } from "react";
import UserAuthForm from "./UserAuthForm";
import { login } from "@/utils/validators";
import { FormikValues } from "formik";
import { Input } from "@/components/ui/input";
import { Icons } from "./Icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { signIn } from "next-auth/react";
import Loader from "./Loader";

function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const pathName = usePathname();

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
      validationSchema={login}
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
          <div className="flex flex-col gap-5">
            <Input name="email" placeholder="E-mail: admin@admin.com" />
            <Input
              name="password"
              placeholder="Password: 12345678"
              type="password"
              className="mb-0"
            />
          </div>
          <Link
            href="/reset-password"
            className="text-brand-primary-100 text-sm mt-3"
          >
            Recover Password
          </Link>
        </div>
        <div className="flex my-10 gap-1 text-sm h-full lg:items-end">
          <p className="text-brand-black-30">Don`t have an account?</p>
          <Link href="/register" className=" text-brand-primary-100">
            Sign Up
          </Link>
        </div>
      </div>
    </UserAuthForm>
  );
}

export default Login;
