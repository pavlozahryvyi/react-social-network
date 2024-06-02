export const messagesApi = {
  getMessages: () => 'dialogs',
  getUserMessages: (id: string) => `dialogs/${id}/messages`,
  sendMessage: (recipientId: string) => `dialogs/${recipientId}/messages`,
  startChatting: (id: string) => `dialogs/${id}`
};

export const usersApi = {
  getUsers: (params: string) => `/users${params}`
};

export const followApi = {
  follow: (id: string) => `follow/${id}`
};
