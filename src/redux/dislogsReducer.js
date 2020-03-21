const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case(ADD_MESSAGE):
            let text = state.newMessageText;
            let newMessage = {
                id: 5,
                message: text,
            };

            if (text !== '') {
                state.messagesData.push(newMessage);
                state.newMessageText = '';
            }
            return state;

        case(UPDATE_NEW_MESSAGE):

            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => {
    console.log('---message: ', text);
    return {
        type: UPDATE_NEW_MESSAGE,
        newText: text
    }
};


export default dialogsReducer;