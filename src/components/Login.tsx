"use client";

import React, { useState } from "react";
import UserAuthForm from "./UserAuthForm";
import { loginValidationSchema } from "@/lib/validators";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormikValues } from "formik";
import { Input } from "@/components/ui/input";
import { Icons } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";

function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  const handleSubmit = async (values: FormikValues) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email: "durim.dev@gmail.com",
        password: "123456789",
        // Additional credentials if required
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

  if (loading) {
    return <p>...Loading</p>;
  }

  return (
    // <UserAuthForm
    //   validationSchema={loginValidationSchema}
    //   initialValues={{ email: "", password: "" }}
    //   onSubmit={handleSubmit}
    //   submitText="Login"
    // >
    //   <div className="flex flex-col items-center h-full ">
    //     <div className="flex flex-col items-center mb-16">
    //       <Icons.logo className="mb-8" />
    //       <p className="text-xl mb-2">Welcome back!</p>
    //       <p className="text-brand-black-30">Login to your account</p>
    //     </div>
    //     <div className="flex flex-col w-full text-right">
    //       <Input
    //         name="email"
    //         placeholder="E-mail"
    //         className="border-gray-100 bg-brand-background mb-8"
    //       />
    //       <Input
    //         name="password"
    //         placeholder="Password"
    //         type="password"
    //         className="border-gray-100 bg-brand-background mb-3"
    //       />
    //       <Link
    //         href="/reset-password"
    //         className="text-brand-primary-100 text-sm"
    //       >
    //         Recover Password
    //       </Link>
    //       <Link
    //         href="/register"
    //         className="my-12 text-center text-brand-black-30 text-sm"
    //       >
    //         Don`t have an account?{" "}
    //         <span className="text-brand-primary-100">Sign Up</span>
    //       </Link>
    //     </div>
    //   </div>
    // </UserAuthForm>
    <button onClick={handleSubmit}>Login</button>
  );
}

export default Login;
