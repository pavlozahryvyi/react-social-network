import { Chat } from '../Chat/Chat';
import { ProfilePage } from '../Profile/ProfileContainer';
import UsersContainer from '../Users/UsersContainer';

export const pages = [
    {
        name: 'Profile',
        link: '/profile/:userId?',
        component: <ProfilePage />
    },
    {
        name: 'Chat',
        link: '/chat',
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
        name: 'NOT FOUND',
        link: '*',
        notDisplay: true,
        component: <div>ERROR, PAGE NOT FOUND, 404</div>
    }
];
