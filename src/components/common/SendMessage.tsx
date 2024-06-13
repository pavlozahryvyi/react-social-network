import React, { useState } from 'react';
import { SimpleButton } from './SimpleButton';
import { ControlledTextarea } from './form/ControlledTextarea';
import styled from 'styled-components';

const MessageFormStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

type TypeProps = {
  sendMessage: (message: string) => void;
};

export const SendMessage: React.FC<TypeProps> = (props) => {
  const { sendMessage } = props;

  const [message, setMessage] = useState('');

  const handleClick = () => {
    sendMessage(message);
  };

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      Send message:
      <MessageFormStyled>
        <ControlledTextarea
          onChange={handleChange}
          value={message}
          placeholder="send message"
          style={{
            flexGrow: 2
          }}
        />
        <SimpleButton onClick={handleClick}>SEND</SimpleButton>
      </MessageFormStyled>
    </div>
  );
};
