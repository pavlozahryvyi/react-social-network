import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FilterType } from '../../redux/usersReducer';

const formValidate = (values: FormValues) => {
  const errors = {};
  return errors;
};

type FormValues = {
  term: string;
};

type PropsTypes = {
  onSubmitFilter: (filter: FilterType) => void;
};

type FriendType = 'true' | 'false' | 'null';

type FormType = {
  term: '' | string;
  friend: any;
};

const convertFriendsValuesToBool = (value: FriendType) =>
  value === 'true' ? true : value === 'false' ? false : null;

export const UsersSearchForm: React.FC<PropsTypes> = ({ onSubmitFilter }) => {
  const handleSubmit = (values: FormType, actions: FormikHelpers<FormType>) => {
    const { setSubmitting } = actions;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
    const { term } = values;
    const nextFriendValue = convertFriendsValuesToBool(values.friend);
    onSubmitFilter({ term, friend: nextFriendValue });
  };

  return (
    <div>
      <Formik
        initialValues={{ term: '', friend: 'null' }}
        validate={formValidate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field as="select" name="friend">
              <option value="null">All</option>
              <option value="true">Subscribed</option>
              <option value="false">Unsubscribed</option>
            </Field>
            <ErrorMessage name="term" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
