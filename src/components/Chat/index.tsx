import { FC, useEffect, useState } from 'react';
import styles from './Chat.module.css';
import { useGetChatDataQuery } from '../../features/api/chatApiSlice';
import { Message } from './ChatMessage';
import { AddMessage } from './AddMessage';

export const Chat: FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<TypeChatMessage[]>([]);

  const { data } = useGetChatDataQuery(message);

  useEffect(() => {
    if (data) {
      setMessages((prevState) => [...prevState, ...data]);
    }
  }, [data]);

  return (
    <div className={styles.chatWrapper}>
      Chat:
      {messages.map((message, idx) => (
        <Message key={message.userId + idx} {...message} />
      ))}
      <AddMessage sendMessage={setMessage} />
    </div>
  );
};
