import React, { useEffect, useState } from 'react';

export const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({
    wsChannel
}) => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReaadyStatus] = useState<'pending' | 'ready'>(
        'pending'
    );

    useEffect(() => {
        wsChannel?.addEventListener('open', () => setReaadyStatus('ready'));
    }, [wsChannel]);

    const sendMessage = () => {
        wsChannel?.send(message);
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
                <button
                    onClick={sendMessage}
                    disabled={!wsChannel || readyStatus === 'pending'}
                >
                    SEND
                </button>
            </div>
        </div>
    );
};
