import { FC, useEffect, useState } from 'react';
import { useGetChatDataQuery } from '../../features/api/chatApiSlice';
import { Message } from './ChatMessage';
import { SendMessage } from '../common/SendMessage';
import { PageHeader } from '../common/layout/PageHeader';
import styled from 'styled-components';

const ChatWrapperStyled = styled.div`
  height: 500px;
  overflow-y: scroll;
`;

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
      <ChatWrapperStyled>
        {messages.map((message, idx) => (
          <Message key={message.userId + idx} {...message} />
        ))}
      </ChatWrapperStyled>
      <SendMessage sendMessage={setMessage} />
    </>
  );
};
