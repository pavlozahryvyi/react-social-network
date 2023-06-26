import { FC } from 'react';
import styles from '../styles.module.css';
import userPhoto from '../../../../src/assets/img/usr.png';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../types/types';
import { useAppDispatch } from '../../../hooks';
import { followThunkHandler } from '../../../thunks/usersThunk';

type PropsTypes = {
  user: UserType;
  followingInProgress: Array<number>;
};

const Users: FC<PropsTypes> = (props) => {
  const { user, followingInProgress } = props;
  const { id, followed, photos, name } = user;

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(followThunkHandler(id, followed));

  const disabled = followingInProgress.some(
    (followUserId: number) => followUserId === id
  );

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
      <button disabled={disabled} onClick={handleClick}>
        {followed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};

export default Users;
