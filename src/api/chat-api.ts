export type ChatMessageType = {
  userId: number;
  userName: string;
  message: string;
  photo: string;
};

type SubscriberType = (messages: ChatMessageType[]) => void;

let subscribers = [] as SubscriberType[];

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
    return () => (subscribers = subscribers.filter((item) => item !== cb));
  },
  unSubscribe(cb: SubscriberType) {
    subscribers = subscribers.filter((item) => item !== cb);
  }
};
