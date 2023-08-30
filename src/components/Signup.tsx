"use client";

import React, { useState } from "react";
import UserAuthForm from "./UserAuthForm";
import { register } from "@/utils/validators";
import { FormikValues } from "formik";
import { Input } from "@/components/ui/input";
import { Icons } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import Loader from "./Loader";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";

function Signup() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const auth = getAuth(app);

  const handleSubmit = async (values: FormikValues) => {
    setLoading(true);
    try {
      createUserWithEmailAndPassword(auth, values?.email, values?.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            toast({
              title: "Success",
              description: "User created successfully",
              variant: "success",
            });
            router.push("/login");
          }
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: error?.message,
            variant: "destructive",
          });
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserAuthForm
      validationSchema={register}
      initialValues={{ fullName: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      submitText="Sign up"
    >
      {loading && <Loader />}

      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col items-center mb-16">
          <Icons.logo className="mb-8" />
          <p className="text-xl mb-2 font-medium">
            Get Started with{" "}
            <span className="text-brand-primary-100">Metrix</span>
          </p>
          <p className="text-brand-black-30">Create your free account</p>
        </div>
        <div className="flex flex-col gap-5 mb-10 w-full text-right">
          <Input name="fullName" placeholder="Full Name" />
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Password" type="password" />
          <div className="flex items-center justify-end gap-1 text-sm mb-5">
            <p className="text-brand-black-30">Already have an account?</p>
            <Link href="/login" className=" text-brand-primary-100">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </UserAuthForm>
  );
}

export default Signup;
