let state = {

    profilePage: {
        postData: [
            {id:2, message: 'My first react app!', likesCount: 32},
            {id:3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
            {id:4, message: 'React is cool!', likesCount: 45},
        ],

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

export let addPost = postMassage => {
    let newPost = {id:5, message: postMassage, likesCount: 0};
    state.profilePage.postData.push(newPost);
    console.log(state);
};

export default state;