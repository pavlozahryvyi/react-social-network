import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { createAbstractBuilder } from 'typescript';
import { AddMessageForm } from './AddMessageForm';
import styles from './Chat.module.css';

type ChatMessageType = {
    userId: number;
    userName: string;
    message: string;
    photo: string;
};

export const Message: React.FC<{ message: ChatMessageType }> = ({
    message
}) => {
    return (
        <div>
            <img src={message.photo} alt="User" />
            <div>
                <div>{message.userName}</div>
                <div>{message.message}</div>
            </div>
        </div>
    );
};

export const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({
    wsChannel
}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        wsChannel?.addEventListener('message', (e: MessageEvent) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                ...JSON.parse(e.data)
            ]);
        });
    }, [wsChannel]);

    console.log('---wsChannel', wsChannel);

    return (
        <div style={{ height: 400, overflowY: 'auto' }}>
            {messages.map((item, index) => (
                <Message key={item.userId + index} message={item} />
            ))}
        </div>
    );
};

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
