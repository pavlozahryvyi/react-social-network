import { useState } from 'react';
import {
  useGetMessagesQuery,
  useStartChattingMutation
} from '../../features/api/messagesApiSlice';
import Preloader from '../common/Preloader/Preloader';
import { User } from './User';
import styles from './Messages.module.css';
import { NewMessage } from './NewMessage';
import { UserMessages } from './UserMessages';

const Messages: React.FC = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [mutate] = useStartChattingMutation();

  const { data, isLoading } = useGetMessagesQuery(0);

  // console.log('---msgs data', data);
  console.log('---userId', userId);

  const handleClick = () => {
    mutate(29908);
  };

  if (isLoading) return <Preloader />;

  return (
    <div className={styles.dialogs}>
      Messages
      <button onClick={handleClick}>CLICK</button>
      <div className={styles.messages}>
        <div className={styles.usersInfo}>
          Dialogs with:
          {data?.map((user) => (
            <User {...user} key={user.id} setUserId={setUserId} />
          ))}
        </div>

        {userId && <UserMessages userId={userId} />}
      </div>
    </div>
  );
};

export default Messages;
