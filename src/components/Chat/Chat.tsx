import React, { useEffect, useState } from 'react';
import { AddMessageForm } from './AddMessageForm';
import styles from './Chat.module.css';
import { Messages } from './Messages';

export const Chat: React.FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;

    const closeHandler = () => {
      setTimeout(createChannel, 3000);
    };

    const createChannel = () => {
      ws?.removeEventListener('close', closeHandler);
      ws?.close();
      ws = new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
      );
      ws.addEventListener('close', closeHandler);
      setWsChannel(ws);
    };

    createChannel();

    return () => {
      ws.removeEventListener('close', closeHandler);
      ws.close();
    };
  }, []);

  return (
    <div className={styles.chatWrapper}>
      Chat:
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </div>
  );
};
