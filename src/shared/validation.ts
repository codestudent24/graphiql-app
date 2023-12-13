import { object, string } from 'yup';

export const authSchema = object({
  mail: string().required('e-mail should not be empty').email(),
  password: string()
    .required('password should not be empty')
    .min(8, 'password should contain at least 8 symbols')
    .matches(/[A-Za-z]/, 'password should contain letter')
    .matches(/\d/, 'password should contain digit')
    .matches(/^[A-Za-z\d\s]/, 'password should contain special symbol'),
});
