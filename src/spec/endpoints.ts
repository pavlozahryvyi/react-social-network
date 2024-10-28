export const messagesEndpoints = {
  getMessages: () => 'dialogs',
  getUserMessages: (id: string) => `dialogs/${id}/messages`,
  sendMessage: (recipientId: string) => `dialogs/${recipientId}/messages`,
  startChatting: (id: string) => `dialogs/${id}`
};

export const usersEndpoints = {
  getUsers: (params: string) => `/users${params}`
};

export const followEndpoints = {
  follow: (id: string) => `follow/${id}`
};

export const authEndpoints = {
  authMe: () => 'auth/me',
  logIn: () => '/auth/login',
  logOut: () => '/auth/logout'
};

export const profileEndpoints = {
  getProfile: (id: number) => `profile/${id}`,
  getProfileStatus: (id: number) => `profile/status/${id}`,
  updateProfileInfo: () => 'profile',
  updateProfileStatus: () => 'profile/status',
  updateProfilePhoto: () => 'profile/photo'
};

export const chatEndpoints = {
  wsChatChannel: () =>
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
};

export const securityEndpoints = {
  getCaptcha: () => '/security/get-captcha-url'
};
