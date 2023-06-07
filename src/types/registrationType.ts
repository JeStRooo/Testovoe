import { FormikTouched, FormikErrors, FormikHandlers } from 'formik';

export interface RegistrationType {
  name: string,
  email: string,
  password: string,
  confirmPassword?: string
}

export type CheckedInput = {
  errors: FormikErrors<RegistrationType>;
  touched: FormikTouched<RegistrationType>;
  inputName: keyof RegistrationType;
}

export interface FormikPropsType {
  values: RegistrationType;
  touched: FormikTouched<RegistrationType>;
  errors: FormikErrors<RegistrationType>;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}