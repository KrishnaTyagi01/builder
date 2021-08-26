import * as Yup from "yup";

export const PersonalValidation = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  designation: Yup.string().required("Required"),
  country: Yup.string().required(),
  phoneNumber: Yup.string().length(10).required("Required"),
  cobjective: Yup.string().required("Required"),
});

export const EducationValidation = Yup.object().shape({
  major: Yup.string().required("Designation is required"),
  institution: Yup.string().required("Please enter the company name"),
  startDate: Yup.string().required("Please enter start date"),
  endDate: Yup.string().required("Please enter end date"),
});

export const ExperienceValidation = Yup.object().shape({
  designation: Yup.string().required("Designation is required"),
  company: Yup.string().required("Please enter the company name"),
  description: Yup.string().required("Please enter the company name"),
  experience: Yup.string()
    .min(1, "Minimum 1 character in needed")
    .max(2, "Maximum 2 character Allowed")
    .required("Please enter years of experience"),
  startDate: Yup.string().required("Please enter start date"),
  endDate: Yup.string().required("Please enter end date"),
});

export const ExtraValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});
