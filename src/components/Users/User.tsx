import { FC } from 'react';
import styles from './Users.module.css';
import userPhoto from '../../../src/assets/img/usr.png';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { followThunkHadler } from '../../redux/usersReducer';

type PropsTypes = {
  user: UserType;
  followingInProgress: Array<number>;
};

const Users: FC<PropsTypes> = (props) => {
  const { user, followingInProgress } = props;
  const { id, followed, photos, name } = user;

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(followThunkHadler(id, followed));

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
      <button
        disabled={followingInProgress.some(
          (followUserId: number) => followUserId === id
        )}
        onClick={handleClick}
      >
        {followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default Users;
