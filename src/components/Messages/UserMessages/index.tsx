import { useGetUserMessagesQuery } from '../../../features/api/messagesApiSlice';
import { TypeMessage } from '../../../types/messagesTypes';
import Preloader from '../../common/Preloader/Preloader';
import { NewMessage } from '../NewMessage';
import Message from './Message';

type TypeUserMessagesProps = {
  userId: number;
};

export const UserMessages: React.FC<TypeUserMessagesProps> = (props) => {
  const { userId } = props;

  const { data, isLoading } = useGetUserMessagesQuery(userId);

  if (isLoading) return <Preloader />;

  return (
    <div>
      Messages
      {data.items.map((msgItem: TypeMessage) => (
        <Message key={msgItem.id} message={msgItem.body} />
      ))}
      <NewMessage userId={userId} />
    </div>
  );
};
