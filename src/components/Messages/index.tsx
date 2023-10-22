import { useState } from 'react';
import {
  useGetMessagesQuery,
  useStartChattingMutation
} from '../../features/api/messagesApiSlice';
import Preloader from '../common/Preloader/Preloader';
import { User } from './User';
import { NewMessage } from './NewMessage';
import { UserMessages } from './UserMessages';
import { TypePhotos } from '../../types/profileTypes';
import { Messages as MessagesBlock, UserInfo } from './styles';
import { BlurRadiusBackground } from '../common/BlurRadiusBackground';

const Messages: React.FC = () => {
  const [user, setUser] = useState<{
    id: number;
    photos: TypePhotos;
    userName: string;
  } | null>(null);
  const [mutate] = useStartChattingMutation();

  const { data, isLoading } = useGetMessagesQuery(0);

  const handleClick = () => {
    mutate(29908);
  };

  if (isLoading) return <Preloader />;

  return (
    <BlurRadiusBackground>
      Messages
      <button onClick={handleClick}>CLICK</button>
      <MessagesBlock>
        <UserInfo>
          Dialogs with:
          {data?.map((user) => (
            <User {...user} key={user.id} setUserId={setUser} />
          ))}
        </UserInfo>

        {user && <UserMessages {...user} />}
      </MessagesBlock>
    </BlurRadiusBackground>
  );
};

export default Messages;
