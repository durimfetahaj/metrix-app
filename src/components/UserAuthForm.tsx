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
    <div className="w-[400px] rounded-xl py-10 px-8  bg-white">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="h-full pb-10">
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
