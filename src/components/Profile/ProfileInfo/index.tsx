import React, { useState } from 'react';
import styles from './styles.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/img/usr.png';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
import { ProfileDataForm } from './ProfileDataForm';
import {
  FormSubmitHandler,
  InjectedFormProps,
  SubmitHandler
} from 'redux-form';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { getProfile, getStatus } from '../../../selectors/profileSelector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Contacts } from './Contacts';
import { ProfileType } from '../../../types/types';
import {
  savePhotoThunk,
  saveProfileDataThunk,
  updateStatusThunk
} from '../../../thunks/profileThunk';

const ProfileInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const { userId } = useParams();

  const isOwner = !userId;

  const savePhoto = (file: File) => dispatch(savePhotoThunk(file));
  const saveProfileData = (data: ProfileType) =>
    dispatch(saveProfileDataThunk(data));
  const updateStatus = (data: string) => dispatch(updateStatusThunk(data));

  const profile = useSelector(getProfile);
  const status = useSelector(getStatus);

  const [editMode, setEditMode] = useState(false);

  function onMainPhotoSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) savePhoto(input.files[0]);
  }

  const onSubmit = (formData: ProfileType) => {
    saveProfileData(formData);
    //const promise = saveProfileData(formData);
    // promise.then(
    //     () => {
    //         setEditMode(false);
    //     }
    // );
  };

  if (!profile) return <Preloader />;

  return (
    <div className="profileInfo">
      <div className={styles.profileImage}>
        <img
          src="https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg"
          alt=""
        />
      </div>
      <div className={styles.descriptionBlock}>
        <div>
          <img src={profile.photos.large || userPhoto} alt="" />
          {isOwner ? (
            <input type="file" onChange={onMainPhotoSelected} />
          ) : null}
        </div>
        <div>
          {editMode ? (
            <ProfileDataForm
              profile={profile}
              initialValues={profile}
              status={status}
              onSubmit={onSubmit}
            />
          ) : (
            <>
              <ProfileData
                profile={profile}
                status={status}
                isOwner={isOwner}
                enableEditMode={() => setEditMode(true)}
              />

              <div>
                <h3>Contacts:</h3>
                <Contacts />
              </div>
            </>
          )}
        </div>
      </div>
      {isOwner ? (
        <div>
          <ProfileStatusHooks updateStatus={updateStatus} propStatus={status} />
        </div>
      ) : null}
    </div>
  );
};

type ProfileDataType = {
  profile: ProfileType;
  status: string;
  isOwner: boolean;
  enableEditMode: () => void;
};
const ProfileData: React.FC<ProfileDataType> = ({
  profile,
  status,
  isOwner,
  enableEditMode
}) => {
  return (
    <div>
      {isOwner && <button onClick={enableEditMode}>EDIT</button>}
      <p>Name: {profile.fullName}</p>
      <p>Status: {status}</p>
      <p>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</p>
      {profile.lookingForAJob && profile.lookingForAJobDescription ? (
        <p>Job description: {profile.lookingForAJobDescription}</p>
      ) : null}
      <p>About me: {profile.aboutMe}</p>
    </div>
  );
};

export default ProfileInfo;
