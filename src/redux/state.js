const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {

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


    },

    _callSubscriber () {
        console.log("State changed");
    },


    getState(){
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },


   /* _addPost (){
        let text = this._state.profilePage.newPostText;
        let newPost = {
            id:5,
            message: text,
            likesCount: 0
        };

        if(text !== '') {
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
    },*/

    /* _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/

    dispatch(action){
        if(action.type === ADD_POST){

            //this._addPost()

            let text = this._state.profilePage.newPostText;
            let newPost = {
                id:5,
                message: text,
                likesCount: 0
            };

            if(text !== '') {
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            }
        }else if(action.type === UPDATE_NEW_POST_TEXT){

            //this._updateNewPostText(action.newText)

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
);

window.store = store;

export default store;