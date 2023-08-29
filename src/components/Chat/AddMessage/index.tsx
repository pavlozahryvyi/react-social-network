import React, { useState } from 'react';

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
      Add Message:{' '}
      <div>
        <textarea onChange={handleChange} value={message} />
        <button
          onClick={handleClick}
          // disabled={!wsChannel || readyStatus === 'pending'}
        >
          SEND
        </button>
      </div>
    </div>
  );
};
