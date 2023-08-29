import { Chat } from '../Chat';
import { Login } from '../Login';
import Messages from '../Messages';
import { Profile } from '../Profile';
import { Users } from '../Users';

export const pages = [
  {
    name: 'Profile',
    link: '/',
    path: ['/', '/profile/:userId?', 'react-social-network'],
    component: <Profile />
  },
  {
    name: 'Chat',
    link: '/chat',
    path: '/chat',
    component: <Chat />
  },
  {
    name: 'Messages',
    link: '/messages',
    path: '/messages',
    component: <Messages />
  },
  {
    name: 'Users',
    link: '/users',
    path: '/users',
    component: <Users />
  },
  {
    name: 'Login',
    link: '/login',
    path: '/login',
    notDisplay: true,
    component: <Login />
  },
  {
    name: 'NOT FOUND',
    link: '*',
    path: '*',
    notDisplay: true,
    component: <div>ERROR, PAGE NOT FOUND, 404</div>
  }
];
