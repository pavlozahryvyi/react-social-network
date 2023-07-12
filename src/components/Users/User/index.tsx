import { FC, useMemo } from 'react';
import styles from '../styles.module.css';
import userPhoto from '../../../../src/assets/img/usr.png';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../types/types';
import { useAppDispatch } from '../../../hooks';
import { followThunkHandler } from '../../../thunks/usersThunk';
import { useSelector } from 'react-redux';
import { getFollowingInProgress } from '../../../selectors/usersSelectors';

type PropsTypes = {
  user: UserType;
};

const User: FC<PropsTypes> = (props) => {
  const { id, followed, photos, name } = props.user;
  const { small } = photos;

  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(followThunkHandler(id, followed));

  // console.log('---ONE USER');
  // console.log('---followingInProgress', followingInProgress);

  const disabled = followingInProgress.some(
    (followUserId: number) => followUserId === id
  );

  const upperCaseNameWithPhoto = useMemo(() => {
    // console.log('useMemo');
    const nextName = name;
    return small ? nextName.toUpperCase() : name;
  }, [small, name]);

  return (
    <div>
      <div>
        <NavLink to={`/profile/${id}`}>
          <img src={small || userPhoto} alt="" className={styles.userPhoto} />
        </NavLink>
      </div>
      <div>Name: {upperCaseNameWithPhoto}</div>
      <button disabled={disabled} onClick={handleClick}>
        {followed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </div>
  );
};

export default User;
