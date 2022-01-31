import { useState } from "react";

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