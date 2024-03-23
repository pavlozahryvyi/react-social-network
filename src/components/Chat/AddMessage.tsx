import React, { useState } from 'react';
import { SimpleButton } from '../common/SimpleButton';
import { ControlledTextarea } from '../common/form/ControlledTextarea';

type TypeProps = {
  sendMessage: any;
};

export const AddMessage: React.FC<TypeProps> = (props) => {
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
      Add Message
      <div>
        <ControlledTextarea
          onChange={handleChange}
          value={message}
          placeholder="send msg"
        />
        <SimpleButton onClick={handleClick}>SEND</SimpleButton>
      </div>
    </div>
  );
};
