import { useEffect, useState } from 'react';
import { Message } from './Message';
import { ChatMessageType } from '../../../api/chat-api';

export const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({
  wsChannel
}) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    wsChannel?.addEventListener('message', (e: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
    });
  }, [wsChannel]);

  return (
    <div style={{ height: 400, overflowY: 'auto' }}>
      {messages.map((item, index) => (
        <Message key={item.userId + index} {...item} />
      ))}
    </div>
  );
};
