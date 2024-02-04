import { useSelector } from 'react-redux';
import {
  selectProfile as selectProfile,
  selectStatus
} from '../../../selectors/profileSelector';

export const ProfileData: React.FC = () => {
  const profile = useSelector(selectProfile);
  const status = useSelector(selectStatus);

  if (!profile) return null;

  return (
    <div>
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
