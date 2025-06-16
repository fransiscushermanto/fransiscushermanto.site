import type { ContactParams } from "@/repositories/contact";

export const TOAST_DURATION = 5000;

export const defaultValues: ContactParams = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
