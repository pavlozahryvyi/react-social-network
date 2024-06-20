import { useParams } from 'react-router-dom';
import { selectAuthData } from '../selectors/authSelector';
import { useAppSelector } from './useAppSelector';

export const useGetUserId = () => {
  const { id: currentUserId } = useAppSelector(selectAuthData);

  const { userId } = useParams();

  return (userId || currentUserId || '').toString();
};
