import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const SupportForm = () => {
  const contactSchemaValidation = yup.object({
    name: yup.string().required("Name is Required"),
    surname: yup.string().required("Surname is Required"),
    Message: yup.string().required("Message is Required"),
    email: yup.string().email("invalid email").required("Email is Required"),
    checked: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });
  return (
    <div className="max-w-[550px] p-6 bg-white rounded-xl ">
      <h6 className="text-xs font-semibold mb-4 text-[#171717]">
        You will receive response within 24 hours of time of submit.
      </h6>
      <Formik
        validationSchema={contactSchemaValidation}
        initialValues={{
          name: "",
          surname: "",
          email: "",
          Message: "",
          checked: false,
        }}
        //   onSubmit={(data) => console.log(data)}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4  md:justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs text-[#171717] ">
                Name
              </label>
              <Field
                name="name"
                placeholder="First Name"
                className="h-8 border px-2 outline-[#5F00D9]"
              />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs text-[#171717]">
                Surname
              </label>
              <Field
                name="surname"
                placeholder="surname"
                className="h-8 border px-2 outline-[#5F00D9]"
              />
              <div className="text-xs text-red-500">
                <ErrorMessage name="surname" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs mt-2 text-[#171717]">
              Email
            </label>
            <Field
              name="email"
              placeholder="Enter Your Email"
              type="email"
              className="h-8 border px-2 outline-[#5F00D9]"
            />
            <div className="text-xs text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Message" className="text-xs">
              Message
            </label>
            <Field
              name="Message"
              as="textarea"
              placeholder="Write your Message.."
              className="h-[92px] border  outline-[#5F00D9] "
            />
            <div className="text-xs text-red-500">
              <ErrorMessage name="Message" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="checked" className="text-xs">
              <Field
                type="checkbox"
                name="checked"
                className="mr-2 outline-[#5F00D9]"
              />
              I agree with
              <span className="text-[#5F00D9] cursor-pointer ">
                Terms & Conditions
              </span>
              .
            </label>
            <div className="text-xs text-red-500">
              <ErrorMessage name="checked" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-6 w-full bg-gray py-2 bg-[#D8DDE2] text-[#797E82] rounded-md"
            >
              Send a Message
            </button>
            <button
              type="submit"
              className="mt-2 w-full bg-gray py-2 bg-[#EEEEF4] text-[#171717] rounded-md"
            >
              Book a Meeting
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SupportForm;
