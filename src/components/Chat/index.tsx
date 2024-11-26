import { FC, useEffect, useState } from 'react';
import { useGetChatDataQuery } from '../../features/api/chatApiSlice';
import { Message } from './ChatMessage';
import { SendMessage } from '../common/SendMessage';
import { PageHeader } from '../common/layout/PageHeader';
import styled from 'styled-components';

const ChatWrapperStyled = styled.div`
  overflow-y: scroll;
`;

const PageContentStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
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
    <PageContentStyled>
      <PageHeader pageTitle="Chat" />
      <ChatWrapperStyled>
        {messages.map((message, idx) => (
          <Message key={message.userId + idx} {...message} />
        ))}
      </ChatWrapperStyled>
      <SendMessage sendMessage={setMessage} />
    </PageContentStyled>
  );
};
