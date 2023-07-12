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
import { LuUserPlus2, LuUserMinus2, LuMessageCircle } from 'react-icons/lu';
import { IconButton } from '../../common/IconButton';
import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const UserAction = styled.div`
  display: flex;
`;

const UserIconButton = styled(IconButton)`
  cursor: pointer;
`;

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

  const upperCaseNameWithPhoto = useMemo(() => {
    // console.log('useMemo');
    const nextName = name;
    return small ? nextName.toUpperCase() : name;
  }, [small, name]);

  return (
    <UserWrapper>
      <NavLink to={`/profile/${id}`}>
        <Avatar src={photos.small || userPhoto} alt="User avatar" />
      </NavLink>
      <p>{name}</p>
      <UserAction>
        <UserIconButton
          disabled={isSubscribing || isUnSubscribing}
          onClick={handleClick}
          Icon={followed ? LuUserMinus2 : LuUserPlus2}
        />
        <UserIconButton
          onClick={handleSendMessageClick}
          Icon={LuMessageCircle}
        />
      </UserAction>
    </UserWrapper>
  );
};
