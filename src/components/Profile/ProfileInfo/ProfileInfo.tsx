import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/usr.png";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import { ProfileDataForm } from "./ProfileDataForm";
import { ProfileType } from "../../../types/types";
import {
  FormSubmitHandler,
  InjectedFormProps,
  SubmitHandler,
} from "redux-form";

type PropTypes = {
  savePhoto: (photo: File) => void;
  saveProfileData: (data: ProfileType) => void; //fixtype
  profile: ProfileType | null;
  isOwner: boolean;
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileInfo: React.FC<PropTypes> = (props) => {
  const {
    savePhoto,
    saveProfileData,
    profile,
    isOwner,
    status,
    updateStatus,
  } = props;
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

  return profile ? (
    <div className="profileInfo">
      <div className={style.profileImage}>
        <img
          src="https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg"
          alt=""
        />
      </div>
      <div className={style.descriptionBlock}>
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
              aboutMe={profile.aboutMe}
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
                <Contact title={"Facebook"} data={profile.contacts.facebook} />
                <Contact title={"GitHub"} data={profile.contacts.github} />
                <Contact
                  title={"Instagram"}
                  data={profile.contacts.instagram}
                />
                <Contact title={"Website"} data={profile.contacts.website} />
                <Contact title={"Main link"} data={profile.contacts.mainLink} />
                <Contact title={"YouTube"} data={profile.contacts.youtube} />
                <Contact title={"VK"} data={profile.contacts.vk} />
              </div>
            </>
          )}
        </div>
      </div>
      {isOwner ? (
        <div>
          <ProfileStatusHooks updateStatus={updateStatus} status={status} />
        </div>
      ) : null}
    </div>
  ) : (
    <Preloader />
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
  enableEditMode,
}) => {
  return (
    <div>
      {isOwner && <button onClick={enableEditMode}>EDIT</button>}
      <p>Name: {profile.fullName}</p>
      <p>Status: {status}</p>
      <p>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
      {profile.lookingForAJob && profile.lookingForAJobDescription ? (
        <p>Job description: {profile.lookingForAJobDescription}</p>
      ) : null}
      <p>About me: {profile.aboutMe}</p>
    </div>
  );
};
type ContactType = {
  title: string;
  data: string;
};
const Contact: React.FC<ContactType> = ({ title, data }) => (
  <p>
    <a href={`${data}`}>{title}</a>
  </p>
);

export default ProfileInfo;
