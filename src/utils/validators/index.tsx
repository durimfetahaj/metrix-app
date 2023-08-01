import * as Yup from "yup";

export const login = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const register = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "full name must be at least 3 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const resetPassword = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

// Export as many validation schemas as you need

export const account = Yup.object().shape({
  name: Yup.string()
    .min(3, "full name must be at least 3 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const password = Yup.object().shape({
  currentPassword: Yup.string()
    .min(
      8,
      "Password must be at least 8 Characters and must contain at least a Capital Letter, a Number and a Special Character"
    )
    .required("Current password is required"),
  newPassword: Yup.string()
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New Password must be different from the Current Password"
    )
    .min(
      8,
      "Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character"
    )
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const customer = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number"
    )
    .required("Phone is required"),
});

export const addProduct = Yup.object().shape({
  name: Yup.string()
    .required("Product name is required")
    .min(3, "Name must be longer than 3 characters")
    .required("Product name is required"),
  category: Yup.string().required("Category is required"),
  sellingPrice: Yup.number().required("Selling price is required"),
  costPrice: Yup.number()
    .required("Cost price is required")
    .test("is-non-zero", "Cost price cannot be zero", (value) => value !== 0),
  stock: Yup.string().required("Product stock is required"),
  status: Yup.string().optional(),
  expiryDate: Yup.date(),
  hasExpiryDate: Yup.boolean(),
  images: Yup.array().min(1, "Product has to have one image at least"),
  description: Yup.string().required("Product must have a description"),
});
