let rerenderEntireTree = () => {
    console.log("State changed");
};

let state = {

    profilePage: {
        postData: [
            {id:2, message: 'My first react app!', likesCount: 32},
            {id:3, message: 'I need more CSS', likesCount: 15},
            {id:3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
            {id:4, message: 'React is cool!', likesCount: 45},
        ],
        newPostText: 'Welcome! Have a nice day!',
    },

    dialogsPage: {
        dialogData: [
            {id: 1, name: 'Pavel'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Sasha'},
        ],

        messagesData: [
            {id: 1, message: 'Yo!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What are you doing?'},
            {id: 4, message: 'Hi!'},
        ]
    },

    siteBar: {}


};

export const addPost = () => {
    let text = state.profilePage.newPostText;
    let newPost = {
        id:5,
        message: text,
        likesCount: 0
    };

    if(text !== '') {
        state.profilePage.postData.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    }
};

export const updateNewPostText = newtext => {
    state.profilePage.newPostText = newtext;
    rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
};



export default state;