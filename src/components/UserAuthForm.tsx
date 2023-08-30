import React from "react";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  initialValues: FormikValues;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: FormikValues) => void;
  submitText: string;
};

function UserAuthForm({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  submitText,
}: Props) {
  return (
    <div className="w-full h-full  py-10 px-8 bg-white lg:w-[500px] lg:h-auto lg:rounded-xl">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="lg:h-full">
            {children}
            <Button
              type="submit"
              className="bg-brand-primary-100 w-full hover:bg-brand-primary-80"
            >
              {submitText}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default UserAuthForm;
