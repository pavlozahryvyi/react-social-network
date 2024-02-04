import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { filtersAdded as reducerFiltersAdded } from '../../features/filtersSlice';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { TypeUsersFilter } from '../../types/usersTypes';
import { LuSearch } from 'react-icons/lu';
import { IconButton } from '../common/IconButton';
import { InputField } from '../common/form/InputField';

const formValidate = () => ({});

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
          <InputField name="term" placeholder="Name..." />
          <Field as="select" name="friend">
            <option value="null">All</option>
            <option value="true">Subscribed</option>
            <option value="false">Unsubscribed</option>
          </Field>
          <ErrorMessage name="term" component="div" />
          <IconButton type="submit" Icon={LuSearch} disabled={disabled} />
        </Form>
      </Formik>
    </div>
  );
};
