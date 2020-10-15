import {getAuthUserDataThunk} from "./authReducer";

const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';

let initialState = {
    initialized: false,
    globalError: null //for showing popup with amazing error
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_INITIALIZED):
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

const initialisedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => dispatch => {

    let promise = dispatch(getAuthUserDataThunk());

    Promise.all([promise])
        .then(()=>{
        dispatch(initialisedSuccess());
    })

};

export default appReducer;