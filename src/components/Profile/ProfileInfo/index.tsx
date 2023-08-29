import { useState, ChangeEvent } from 'react';
import styles from './styles.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/img/usr.png';
import ProfileStatus from './ProfileStatus';
import { ProfileForm } from './ProfileForm';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
  selectProfile,
  selectStatus
} from '../../../selectors/profileSelector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Contacts } from './Contacts';
import { TypeProfile } from '../../../types/profileTypes';
import {
  savePhotoThunk,
  saveProfileDataThunk,
  updateStatusThunk
} from '../../../thunks/profileThunk';
import { Avatar } from '../../common/Avatar';
import { ProfileData } from './ProfileData';

const ProfileInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  const { userId } = useParams();

  const isOwner = !userId;

  const savePhoto = (file: File) => dispatch(savePhotoThunk(file));
  const saveProfileData = (data: TypeProfile) =>
    dispatch(saveProfileDataThunk(data));
  const updateStatus = (data: string) => dispatch(updateStatusThunk(data));

  const profile = useSelector(selectProfile);
  const status = useSelector(selectStatus);

  const [editMode, setEditMode] = useState(false);

  function onMainPhotoSelected(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) savePhoto(input.files[0]);
  }

  const onSubmit = (formData: TypeProfile) => {
    saveProfileData(formData);
  };

  if (!profile) return <Preloader />;

  const handleEditMode = () => setEditMode((prev) => !prev);

  const ProfileDataComponent = editMode ? ProfileForm : ProfileData;

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
          <Avatar src={profile.photos.large || userPhoto} alt="" />
          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>
        <div>
          {isOwner && (
            <button onClick={handleEditMode}>
              {editMode ? 'CLOSE EDITING' : 'EDIT'}
            </button>
          )}
        </div>
        <div>
          <ProfileDataComponent profile={profile} status={status} />
        </div>
        <Contacts />
      </div>
      {isOwner ? (
        <div>
          <ProfileStatus updateStatus={updateStatus} propStatus={status} />
        </div>
      ) : null}
    </div>
  );
};

export default ProfileInfo;
