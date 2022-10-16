type ChatMessageType = {
    userId: number;
    userName: string;
    message: string;
    photo: string;
};

//21599

type SubscriberType = (messages: ChatMessageType[]) => void;

const subscribers = [] as SubscriberType[];

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
    // setWsChannel(ws);
};

const messageHandler = (e: MessageEvent) => {
    const nextMessages = JSON.parse(e.data);
    subscribers.forEach((s) => s(nextMessages));
};

export const chatApi = {
    subscribe(cb: SubscriberType) {
        subscribers.push(cb);
    }
};
