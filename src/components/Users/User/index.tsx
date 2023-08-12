import { FC } from 'react';
import styles from '../styles.module.css';
import userPhoto from '../../../../src/assets/img/usr.png';
import { NavLink } from 'react-router-dom';
import { TypeUser } from '../../../types/usersTypes';
import {
  useSubscribeMutation,
  useUnSubscribeMutation
} from '../../../features/api/usersApiSlice';

type PropsTypes = {
  user: TypeUser;
  onClick: (handler: any, userId: number) => void;
};

export const User: FC<PropsTypes> = (props) => {
  const { user, onClick } = props;
  const { id, followed, photos, name } = user;

  const [subscribe, { isLoading: isSubscribing }] = useSubscribeMutation();

  const [unSubscribe, { isLoading: isUnSubscribing }] =
    useUnSubscribeMutation();

  const handleClick = () => {
    onClick(followed ? unSubscribe : subscribe, id);
  };

  return (
    <div>
      <div>
        <NavLink to={`/profile/${id}`}>
          <img
            src={photos.small || userPhoto}
            alt=""
            className={styles.userPhoto}
          />
        </NavLink>
      </div>
      <div>Name: {name}</div>
      <button disabled={isSubscribing || isUnSubscribing} onClick={handleClick}>
        {followed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};
