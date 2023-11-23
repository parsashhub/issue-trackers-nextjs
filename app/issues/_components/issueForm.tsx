"use client";
import { Button, Text, TextArea, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "axios";
import ErrorMessage from "@/app/components/errorMessage";
import Spinner from "@/app/components/spinner";
import { useEffect, useState } from "react";
import { Issue } from "@prisma/client";

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        await axios.post("/api/issues", values);
        router.push("/issues/list");
        toast.success("issue created successfully");
      } catch (e) {
        setIsSubmitting(false);
        toast.error(e.message);
      }
    },
  });
  const { handleChange, setFieldValue, handleSubmit, values, touched, errors } =
    formik;

  useEffect(() => {
    if (issue) {
      setFieldValue("title", issue?.title);
      setFieldValue("description", issue?.description);
    }
  }, [issue]);

  return (
    <form className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input
          placeholder="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </TextField.Root>
      <ErrorMessage>
        {!!(touched["title"] && errors["title"]) &&
          touched["title"] &&
          errors["title"]}
      </ErrorMessage>
      <TextArea
        placeholder="description"
        name="description"
        value={values.description}
        onChange={handleChange}
      />
      <ErrorMessage>
        {!!(touched["description"] && errors["description"]) &&
          touched["description"] &&
          errors["description"]}
      </ErrorMessage>
      <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
        Submit
        {isSubmitting && <Spinner />}
      </Button>
    </form>
  );
};

export default IssueForm;
