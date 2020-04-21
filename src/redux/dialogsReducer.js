const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
    ],

    newMessageText: 'Add your message',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case(ADD_MESSAGE):

            let text = state.newMessageText;
            let newMessage = {
                id: 5,
                message: text,
            };

            if (text.trim() !== '') {
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage],
                    newMessageText : ''
                };
            }

            return state;

        case(UPDATE_NEW_MESSAGE):

            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
};

export const addMessage = () => ({type: ADD_MESSAGE});

export const updateNewMessageText = (text) => {
    //console.log('---message: ', text);
    return {
        type: UPDATE_NEW_MESSAGE,
        newText: text
    }
};


export default dialogsReducer;