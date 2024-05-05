export const messagesApi = {
  getMessages: () => 'dialogs',
  getUserMessages: (id: string) => `dialogs/${id}/messages`,
  sendMessage: (recipientId: string) => `dialogs/${recipientId}/messages`,
  startChatting: (id: string) => `dialogs/${id}`
};
