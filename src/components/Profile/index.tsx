import { useEffect, FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import { getProfileThunk, getUserStatusThunk } from '../../thunks/profileThunk';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { getProfile as asyncGetProfile } from '../../features/profileSlice';

export const Profile: FC = () => {
  const navigate = useNavigate();

  const [getProfile] = useCustomDispatch([asyncGetProfile]);

  const { id: currentUserId } = useAppSelector(selectAuthData);

  const { userId } = useParams();

  // const getUserStatus = (userId: number) =>
  // dispatch(getUserStatusThunk(userId));

  useEffect(() => {
    const id = userId || currentUserId;
    if (!id) {
      navigate('/login');
    } else {
      getProfile(Number(id));
    }
  }, [userId]);

  return (
    <>
      <ProfileInfo />
      {/* <MyPostsContainer /> */}
    </>
  );
};
