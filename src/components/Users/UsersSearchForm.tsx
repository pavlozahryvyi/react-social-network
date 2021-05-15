import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

type FriedType = 'true' | 'false' | 'null';

type FormType = {
    term: '' | string;
    friend: FriedType;
};

const convertFriendsValuesToBool = (value: FriedType) =>
    value === 'true' ? true : value === 'false' ? false : null;

export const UsersSearchForm: React.FC<PropsTypes> = ({ onSubmitFilter }) => {
    const onSubmit = (
        values: FormType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
        const { term } = values;
        const friend = convertFriendsValuesToBool(values.friend);
        onSubmitFilter({ term, friend });
    };

    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: 'null' }}
                validate={formValidate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Followed</option>
                            <option value="false">Unfolllowed</option>
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
