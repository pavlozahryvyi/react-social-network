import { Chat } from '../Chat';
import { Login } from '../Login';
import Messages from '../Messages';
import { Profile } from '../Profile';
import { Users } from '../Users';
import {
  PiPersonArmsSpreadFill,
  PiChatCircleTextFill,
  PiWechatLogoFill,
  PiPersonSimpleBikeBold
} from 'react-icons/pi';
import { BiLogOutCircle } from 'react-icons/bi';

export const pages = [
  {
    name: 'Profile',
    link: '/',
    path: ['/', '/profile/:userId?', 'react-social-network'],
    component: <Profile />,
    icon: <PiPersonArmsSpreadFill />
  },
  {
    name: 'Chat',
    link: '/chat',
    path: '/chat',
    component: <Chat />,
    icon: <PiWechatLogoFill />
  },
  {
    name: 'Messages',
    link: '/messages',
    path: '/messages',
    component: <Messages />,
    icon: <PiChatCircleTextFill />
  },
  {
    name: 'People',
    link: '/users',
    path: '/users',
    component: <Users />,
    icon: <PiPersonSimpleBikeBold />
  },
  {
    name: 'Login',
    link: '/login',
    path: '/login',
    notDisplay: true,
    component: <Login />,
    icon: <BiLogOutCircle />
  },
  {
    name: 'NOT FOUND',
    link: '*',
    path: '*',
    notDisplay: true,
    component: <div>ERROR, PAGE NOT FOUND, 404</div>
  }
];
