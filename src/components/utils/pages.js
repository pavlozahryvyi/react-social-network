import { Chat } from '../Chat/Chat';
import Login from '../Login/Login';
import { ProfilePage } from '../Profile/ProfileContainer';
import UsersContainer from '../Users/UsersContainer';

export const pages = [
    {
        name: 'Profile',
        link: '/',
        path: ['/', '/profile/:userId?', 'react-social-network'],
        component: <ProfilePage />
    },
    {
        name: 'Chat',
        link: '/chat',
        path: '/chat',
        component: <Chat />
    },
    // {
    //     name: 'Messages',
    //     link: '/messages',
    //     component:
    // },
    {
        name: 'Users',
        link: '/users',
        path: '/users',
        component: <UsersContainer />
    },
    // {
    //     name: 'News',
    //     link: '/news',
    //     component:  <>
    // },
    // {
    //     name: 'Settings',
    //     link: '/settings',
    //     component:
    // },
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
