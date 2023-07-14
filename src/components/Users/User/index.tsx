import { FC } from 'react';
import styles from '../styles.module.css';
import userPhoto from '../../../../src/assets/img/usr.png';
import { NavLink } from 'react-router-dom';
// import { useAppDispatch } from '../../../hooks/useAppDispatch';
// import { followThunkHandler } from '../../../thunks/usersThunk';
import { useDispatch } from 'react-redux';
import { TypeUser } from '../../../types/usersTypes';

type PropsTypes = {
  user: TypeUser;
};

const Users: FC<PropsTypes> = (props) => {
  const { user } = props;
  const { id, followed, photos, name } = user;

  const dispatch = useDispatch();

  const handleClick = () => {}; //dispatch(followThunkHandler(id, followed));

  // const disabled = followingInProgress.some(
  //   (followUserId: number) => followUserId === id
  // );

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
      <button disabled={false} onClick={handleClick}>
        {followed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};

export default Users;
