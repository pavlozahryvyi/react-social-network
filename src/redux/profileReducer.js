const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id:2, message: 'My first react app!', likesCount: 32},
        {id:3, message: 'I need more CSS', likesCount: 15},
        {id:3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
        {id:4, message: 'React is cool!', likesCount: 45},
    ],
    newPostText: 'Welcome! Have a nice day!',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case(ADD_POST):
            let text = state.newPostText;
            let newPost = {
                id: 5,
                message: text,
                likesCount: 0
            };

            if (text !== '') {
                state.postData.push(newPost);
                state.newPostText = '';
            }

            return state;

        case(UPDATE_NEW_POST_TEXT):

            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }
};



export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
);

export default profileReducer;