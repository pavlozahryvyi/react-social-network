import React from 'react';
import { MessageType } from '../../../../types/messagesTypes';
import styled from 'styled-components';

const MessageWrapper = styled.div<{ $isCurrentUserSender?: boolean }>`
  display: flex;
`;

const MessageBody = styled.span<{ $isCurrentUserSender?: boolean }>`
  color: #9f9da3;
  background-color: #f4f4f4;
  padding: 5px;
  display: block;
  border-radius: ${(props) =>
    props.$isCurrentUserSender ? '10px 10px 0 10px' : '10px 10px 10px 0'};
  margin: 5px 0;
`;

export const Message: React.FC<MessageType> = (props) => {
  const { message, isCurrentUserSender } = props;

  return (
    <MessageWrapper $isCurrentUserSender={isCurrentUserSender}>
      <MessageBody $isCurrentUserSender={isCurrentUserSender}>
        {message}
      </MessageBody>
    </MessageWrapper>
  );
};
