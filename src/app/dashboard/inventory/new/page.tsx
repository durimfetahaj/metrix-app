"use client";

import React, { useEffect } from "react";
import { useFormikContext, Formik, Form, FormikValues } from "formik";
import useProducts from "@/store/useProducts";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { addProduct } from "@/utils/validators";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Select from "@/components/Select";
import Switch from "@/components/Switch";
import { DatePicker } from "@/components/DatePicker";
import ImageUploader from "@/components/ImageUploader";
import Textarea from "@/components/Textarea";

function Page() {
  const { add } = useProducts();
  const { toast } = useToast();
  const router = useRouter();

  // TODO: add additional images feature

  return (
    <div className="max-w-[900px]">
      <Formik
        initialValues={{
          name: "",
          category: "",
          sellingPrice: "",
          costPrice: "",
          stock: "",
          status: false,
          expiryDate: "",
          hasExpiryDate: false,
          dateAdded: new Date(),
          images: [],
          description: "",
        }}
        validationSchema={addProduct}
        onSubmit={(values) => {
          try {
            add({
              ...values,
            });
            toast({
              title: "Inventory updated.",
              description: "New Inventory item has been created successfully.",
              variant: "success",
            });
            router.push("/dashboard/inventory");
          } catch (error: any) {
            alert(error.message);
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <PageHead text="New Inventory Item">
              <Button type="submit">Save</Button>
            </PageHead>
            <div className="flex gap-10 p-8 rounded-xl bg-white">
              <div className="flex flex-col w-1/2">
                <Input name="name" placeholder="Product Name" />
                <Select
                  name="category"
                  options={[
                    { value: "Gadgets" },
                    { value: "Clothing" },
                    { value: "Home Decor" },
                    { value: "Beauty" },
                    { value: "Books" },
                    { value: "Toys" },
                  ]}
                  placeholder="Product Category"
                />
                <div className="flex mt-8 gap-3">
                  <div className="flex-1">
                    <Input
                      name="sellingPrice"
                      placeholder="Selling Price"
                      type="number"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="number"
                      name="costPrice"
                      placeholder="Cost Price"
                    />
                  </div>
                </div>
                <Input name="stock" placeholder="Quantity in stock" />

                <div className="flex justify-between ">
                  <label
                    className="text-brand-black-30 font-medium"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <Switch
                    id="status"
                    checked={formik.values.status}
                    onCheckedChange={(checked) =>
                      formik.setFieldValue("status", checked)
                    }
                    label={formik.values.status ? "Unpublish" : "Publish"}
                  />
                </div>
                <div className="flex justify-between">
                  <label
                    className="text-brand-black-30 font-medium"
                    htmlFor="hasExpiryDate"
                  >
                    Expiry Date
                  </label>
                  <Switch
                    id="hasExpiryDate"
                    checked={formik.values.hasExpiryDate}
                    onCheckedChange={(checked) =>
                      formik.setFieldValue("hasExpiryDate", checked)
                    }
                    label="Add Expiry Date"
                  />
                </div>

                {formik.values.hasExpiryDate && (
                  <DatePicker formik={formik} name="expiryDate" />
                )}
                <Textarea
                  name="description"
                  placeholder="Add a description for the product"
                  onChange={(e) =>
                    formik.setFieldValue("description", e.target.value)
                  }
                  value={formik.values.description}
                />
              </div>

              <ImageUploader size="lg" name="images" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Page;
