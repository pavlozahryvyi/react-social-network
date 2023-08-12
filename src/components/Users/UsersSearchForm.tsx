import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { filtersAdded as reducerFiltersAdded } from '../../features/filtersSlice';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { TypeUsersFilter } from '../../types/usersTypes';

const formValidate = (values: FormValues) => {
  const errors = {};
  return errors;
};

type FormValues = {
  term: string;
};

type PropsTypes = {
  initialValues: TypeUsersFilter;
  disabled: boolean;
};

type FriendType = 'true' | 'false' | 'null';

type FormType = {
  term: '' | string;
  friend: any;
};

const convertFriendsValuesToBool = (value: FriendType) =>
  value === 'true' ? true : value === 'false' ? false : null;

export const UsersSearchForm: FC<PropsTypes> = (props) => {
  const { initialValues, disabled } = props;

  const [filtersAdded] = useCustomDispatch([reducerFiltersAdded]);

  const handleSubmit = (values: FormType) => {
    const { term, friend } = values;
    const nextFriendValue = convertFriendsValuesToBool(friend);
    filtersAdded({ filterType: 'users', term, friend: nextFriendValue });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={formValidate}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="term" />
          <Field as="select" name="friend">
            <option value="null">All</option>
            <option value="true">Subscribed</option>
            <option value="false">Unsubscribed</option>
          </Field>
          <ErrorMessage name="term" component="div" />
          <button type="submit" disabled={disabled}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
