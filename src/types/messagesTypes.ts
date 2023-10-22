import { TypePhotos } from './profileTypes';

export type DialogType = {
  id?: number;
  name: string;
};

export type MessageType = {
  id?: number;
  message: string;
  isCurrentUserSender?: boolean;
};

export type DialogPageType = {
  messagesData: Array<MessageType>;
  dialogData: Array<DialogType>;
};

export type TypeMessageUser = {
  hasNewMessages: boolean;
  id: number;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: TypePhotos;
  userName: string;
};

export type TypeMessage = {
  addedAt: string;
  body: string;
  id: string;
  recipientId: number;
  senderId: number;
  senderName: string;
  translatedBody: null;
  viewed: boolean;
};
