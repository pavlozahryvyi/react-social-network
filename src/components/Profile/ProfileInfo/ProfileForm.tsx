import { FC } from 'react';
import { Formik, Field, Form } from 'formik';
import { TypeProfile, TypeStatus } from '../../../types/profileTypes';
import { useCustomDispatch } from '../../../hooks/useCustomDispatch';
import {
  updateProfile as asyncUpdateProfile,
  updateProfileStatus as asyncUpdateProfileStatus
} from '../../../features/profileSlice';

type TypePropsProfileForm = {
  profile: TypeProfile;
  status: string;
};

export const ProfileForm: FC<TypePropsProfileForm> = (props) => {
  const { profile, status } = props;

  const [updateProfile, updateProfileStatus] = useCustomDispatch([
    asyncUpdateProfile,
    asyncUpdateProfileStatus
  ]);

  const handleSubmit = (values: TypeProfile & TypeStatus) => {
    const { status, ...rest } = values;
    updateProfile(rest);
    updateProfileStatus(status);
  };

  return (
    <div>
      <Formik initialValues={{ ...profile, status }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="fullName">Full Name</label>
          <Field id="fullName" name="fullName" placeholder="Full Name" />

          <label htmlFor="status">Status</label>
          <Field id="status" name="status" placeholder="status" />

          <label htmlFor="aboutMe">About Me</label>
          <Field id="aboutMe" name="aboutMe" placeholder="About Me" />

          <label htmlFor="lookingForAJob">Looking for a job</label>
          <Field
            id="lookingForAJob"
            name="lookingForAJob"
            placeholder="Looking for a job"
            type="checkbox"
          />

          <label htmlFor="lookingForAJobDescription">Job description</label>
          <Field
            id="lookingForAJobDescription"
            name="lookingForAJobDescription"
            placeholder="Job description"
          />

          <p>Contacts</p>

          <label htmlFor="github">GitHub: </label>
          <Field id="github" name="contacts.github" placeholder="GitHub" />

          <label htmlFor="instagram">Instagram: </label>
          <Field
            id="instagram"
            name="contacts.instagram"
            placeholder="Instagram"
          />

          <label htmlFor="website">Portfolio: </label>
          <Field id="website" name="contacts.website" placeholder="Portfolio" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
