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
import { Messages as MessagesBlock, UsersInfo } from './styles';
import { PageHeader } from '../common/ContentHeader';
import { NoMessages } from './NoMessages';

const Messages: React.FC = () => {
  const [user, setUser] = useState<{
    id: number;
    photos: TypePhotos;
    userName: string;
  } | null>(null);

  const { data, isLoading } = useGetMessagesQuery();

  if (isLoading) return <Preloader />;

  return (
    <>
      <PageHeader pageTitle="Messages">
        <UsersInfo>
          {data?.map((user) => (
            <User {...user} key={user.id} setUserId={setUser} />
          ))}
        </UsersInfo>
      </PageHeader>
      <MessagesBlock>
        {user ? <UserMessages {...user} /> : <NoMessages />}
      </MessagesBlock>
    </>
  );
};

export default Messages;
