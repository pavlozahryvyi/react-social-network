import { FC } from 'react';
import userPhoto from '../../../../src/assets/img/usr.png';
import { NavLink } from 'react-router-dom';
import { TypeUser } from '../../../types/usersTypes';
import {
  useSubscribeMutation,
  useUnSubscribeMutation
} from '../../../features/api/subscribeApiSlice';
import { Avatar } from '../../common/Avatar';
import { useStartChattingMutation } from '../../../features/api/messagesApiSlice';

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

  const [startChatting] = useStartChattingMutation();

  const handleClick = () => {
    onClick(followed ? unSubscribe : subscribe, id);
  };

  const handleSendMessageClick = () => {
    startChatting(id);
  };

  return (
    <div>
      <div>
        <NavLink to={`/profile/${id}`}>
          <Avatar src={photos.small || userPhoto} alt="User avatar" />
        </NavLink>
      </div>
      <div>Name: {name}</div>
      <button disabled={isSubscribing || isUnSubscribing} onClick={handleClick}>
        {followed ? 'Unsubscribe' : 'Subscribe'}
      </button>
      <button onClick={handleSendMessageClick}>Send message</button>
    </div>
  );
};
