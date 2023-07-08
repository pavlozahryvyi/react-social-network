import { useEffect, FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserId as getAuthUserId } from '../../selectors/profileSelector';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { getProfileThunk, getUserStatusThunk } from '../../thunks/profileThunk';

export const Profile: FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const authUserId = useSelector(getAuthUserId);

  const { userId } = useParams();

  const getProfile = (userId: number) => dispatch(getProfileThunk(userId));
  const getUserStatus = (userId: number) =>
    dispatch(getUserStatusThunk(userId));

  const refreshProfile = () => {
    const id = userId || authUserId;
    if (!id) {
      navigate('/login');
    } else {
      getProfile(Number(id));
      getUserStatus(Number(id));
    }
  };

  useEffect(() => {
    refreshProfile();
  }, [userId]);

  return (
    <>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  );
};
