import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup
    .string()
    .required('Username is required'),
  password: Yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log('values: ', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <SignInForm isSubmitting={isSubmitting} />
      )
      }
    </Formik>
  );
};

export default SignIn;