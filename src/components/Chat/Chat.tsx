import React, { ChangeEventHandler, useEffect, useState } from 'react';
import styles from './Chat.module.css';

// const ws = new WebSocket(
//     'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
// );
// ws.addEventListener('open', (e: Event) => {
//     console.log('---ws open');
// });

export const Message: React.FC<{ message: ChatMessageType }> = ({
    message
}) => {
    return (
        <div>
            <img src={message.photo} />
            <div>
                <div>{message.userName}</div>
                <div>{message.message}</div>
            </div>
        </div>
    );
};

export const Messages: React.FC = () => {

    const ws = new WebSocket(
            'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
        );

    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    // const wsMessageHandler = (e: MessageEvent) => {
    //     debugger;
    //     console.log('---ws event', JSON.parse(e.data));
    //     setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
    // };

    useEffect(() => {

        // console.log('ws', ws);
        // window.addEventListener("keydown", () => console.log("123"));
        // ws.addEventListener('open', (e: Event) => {
        //     console.log('---ws open');
        // });
        
        ws.addEventListener('message', (e: MessageEvent) => {
            console.log('---ws event', JSON.parse(e.data));
            setMessages((prevMessages) => [
                ...prevMessages,
                ...JSON.parse(e.data)
            ]);
        });
        // return () => {
        //     console.log('---unmount');

        //     ws.removeEventListener('message', wsMessageHandler);
        // };
    }, []);

    return (
        <div style={{ height: 400, overflowY: 'auto' }}>
            {messages.map((item, index) => (
                <Message key={item.userId + index} message={item} />
            ))}
        </div>
    );
};

export const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('');

    const ws = new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
    );

    const sendMessage = () => {
        ws.send(message);
        setMessage('');
    };

    return (
        <div>
            Add Message:{' '}
            <div>
                <textarea
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    value={message}
                />
                <button onClick={sendMessage}>SEND</button>
            </div>
        </div>
    );
};

type ChatMessageType = {
    userId: 15148;
    userName: string;
    message: string;
    photo: string;
};

export const Chat: React.FC = () => {
    return (
        <div className={styles.chatWrapper}>
            Chat:
            <Messages />
            <AddMessageForm />
        </div>
    );
};
