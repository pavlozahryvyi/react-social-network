import React, { useEffect, useState } from 'react';

export const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  // const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>(
  //   'pending'
  // );

  // useEffect(() => {
  // wsChannel?.addEventListener('open', () => setReadyStatus('ready'));
  // }, [wsChannel]);

  const sendMessage = () => {
    // wsChannel?.send(message);
    // setMessage('');
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
          onClick={sendMessage}
          // disabled={!wsChannel || readyStatus === 'pending'}
        >
          SEND
        </button>
      </div>
    </div>
  );
};
