import React from 'react';
import styles from './Message.module.css';
import { MessageType } from '../../../../types/messagesTypes';
import styled from 'styled-components';

const MessageBody = styled.div`
  color: red;
`;

export const Message: React.FC<MessageType> = (props) => {
  const { message } = props;

  return <MessageBody>{message}</MessageBody>;
};
