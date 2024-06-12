import { useState, ChangeEvent } from 'react';
import styles from './styles.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/img/usr.png';
import ProfileStatus from './ProfileStatus';
import { ProfileForm } from './ProfileForm';
import {
  selectProfile,
  selectStatus
} from '../../../selectors/profileSelector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Contacts } from './Contacts';
import { Avatar } from '../../common/Avatar';
import { ProfileData } from './ProfileData';
import { PageHeader } from '../../common/ContentHeader';

const ProfileInfo: React.FC = () => {
  const { userId } = useParams();

  const isOwner = !userId;

  //TODO: remove this, using trk redux and query
  // const savePhoto = (file: File) => dispatch(savePhotoThunk(file));
  // const saveProfileData = (data: TypeProfile) =>
  //   dispatch(saveProfileDataThunk(data));
  // const updateStatus = (data: string) => dispatch(updateStatusThunk(data));

  const profile = useSelector(selectProfile);
  const status = useSelector(selectStatus);

  const [editMode, setEditMode] = useState(false);

  function onMainPhotoSelected(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    // if (input.files?.length) savePhoto(input.files[0]);
  }

  if (!profile) return <Preloader />;

  const handleEditMode = () => setEditMode((prev) => !prev);

  const ProfileDataComponent = editMode ? ProfileForm : ProfileData;

  return (
    <>
      <PageHeader pageTitle="Profile" />
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
          <ProfileStatus
            updateStatus={(data) => {
              return;
            }}
            propStatus={status}
          />
        </div>
      ) : null}
    </>
  );
};

export default ProfileInfo;
