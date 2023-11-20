"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import {toast} from "react-toastify";

const NewIssuesPage = () => {
  const router = useRouter();

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
      console.log(values);
      try {
        await axios.post("/api/issues", values);
        router.push("/issues");
        toast.success("issue created successfully")
      } catch (e) {
        toast.error(e.message)
      }
    },
  });
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    formik;

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
      <div className="text-red-500">
        {!!(touched["title"] && errors["title"]) &&
            touched["title"] &&
            errors["title"]}
      </div>
      <TextArea
        placeholder="description"
        name="description"
        value={values.description}
        onChange={handleChange}
      />
      <div className="text-red-500">
        {!!(touched["description"] && errors["description"]) &&
            touched["description"] &&
            errors["description"]}
      </div>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default NewIssuesPage;
