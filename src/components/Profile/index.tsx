import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import ProfileInfo from './ProfileInfo';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { getProfile as asyncGetProfile } from '../../features/profileSlice';
import { useGetProfileDataQuery } from '../../features/api/profileApiSlice';

export const Profile: FC = () => {
  const navigate = useNavigate();

  const [getProfile] = useCustomDispatch([asyncGetProfile]);

  const { id: currentUserId } = useAppSelector(selectAuthData);

  const { userId } = useParams();

  const { data } = useGetProfileDataQuery(userId || currentUserId);

  console.log('---data', data);

  //todo: remove the logic as private component

  // useEffect(() => {
  //   const id = userId || currentUserId;
  //   if (!id) {
  //     navigate('/login');
  //   } else {
  //     getProfile(Number(id));
  //   }
  // }, [currentUserId, getProfile, navigate, userId]);

  return <ProfileInfo />;
};
