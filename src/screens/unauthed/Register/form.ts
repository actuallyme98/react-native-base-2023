import * as yup from 'yup';

export const formSchema = yup.object({
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .when('password', ([password], schema) => {
      return schema.equals([password], 'Confirm');
    })
    .required(),
});

export interface FormValues extends yup.InferType<typeof formSchema> {}

export const defaultFormValues: FormValues = {
  password: '',
  confirmPassword: '',
};
