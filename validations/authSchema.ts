import * as yup from "yup";

export const registerSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(30),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirm password not mtached")
      .required(),
  })
  .required();

export type RegisterType = yup.InferType<typeof registerSchema>;

export const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export type LoginType = yup.InferType<typeof loginSchema>;
