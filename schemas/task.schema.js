import * as yup from "yup";

export const createTaskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(1, "Title must be at least 1 character long"),

  description: yup
    .string()
    .required("Description is required")
    .min(1, "Description must be at least 1 character long"),

  date: yup.date().nullable(true).notRequired(),
});
