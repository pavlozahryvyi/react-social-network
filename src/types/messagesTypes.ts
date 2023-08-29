export type DialogType = {
  id?: number;
  name: string;
};

export type MessageType = {
  id?: number;
  message: string;
};

export type DialogPageType = {
  messagesData: Array<MessageType>;
  dialogData: Array<DialogType>;
};
