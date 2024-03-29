import { FC, useEffect, useState } from 'react';
import { useGetChatDataQuery } from '../../features/api/chatApiSlice';
import { Message } from './ChatMessage';
import { AddMessage } from './AddMessage';
import { PageHeader } from '../common/ContentHeader';

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
    <>
      <PageHeader pageTitle="Chat" />
      {messages.map((message, idx) => (
        <Message key={message.userId + idx} {...message} />
      ))}
      <AddMessage sendMessage={setMessage} />
    </>
  );
};
