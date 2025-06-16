import * as yup from "yup";

import type { ContactParams } from "@/repositories/contact";

export const TOAST_DURATION = 5000;

export const defaultValues: ContactParams = {
  name: "",
  email: "",
  subject: "",
  message: "",
  captchaResponse: "",
};

const schema = {
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
  captchaResponse: yup.string().required("Captcha response is required"),
} satisfies Record<keyof ContactParams, yup.ISchema<unknown>>;

export const contactScheme = yup.object(schema);
