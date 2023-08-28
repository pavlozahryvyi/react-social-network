import { FC, useEffect, useState } from 'react';
import { AddMessageForm } from './AddMessageForm';
import styles from './Chat.module.css';
import { Messages } from './Messages';
import { useGetChatDataQuery } from '../../features/api/chatApiSlice';
import { Message } from './Messages/Message';

export const Chat: FC = () => {
  const { data } = useGetChatDataQuery();

  console.log('---data', data);

  // const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  // useEffect(() => {
  //   let ws: WebSocket;

  //   const closeHandler = () => {
  //     setTimeout(createChannel, 3000);
  //   };

  //   const createChannel = () => {
  //     ws?.removeEventListener('close', closeHandler);
  //     ws?.close();
  //     ws = new WebSocket(
  //       'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  //     );
  //     ws.addEventListener('close', closeHandler);
  //     setWsChannel(ws);
  //   };

  //   createChannel();

  //   return () => {
  //     ws.removeEventListener('close', closeHandler);
  //     ws.close();
  //   };
  // }, []);

  return (
    <div className={styles.chatWrapper}>
      Chat:
      {data?.map((message) => (
        <Message key={message.userId} {...message} />
      ))}
      {/* <Messages wsChannel={wsChannel} /> */}
      <AddMessageForm />
    </div>
  );
};
