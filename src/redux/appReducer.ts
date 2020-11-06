import {getAuthUserDataThunk} from "./authReducer";

const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';



export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type InitialisedSuccessActionType = {
    type: typeof SET_INITIALIZED; // only
}

//returning type - : InitialisedSuccessActionType
const initialisedSuccess = (): InitialisedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = ():any => (dispatch : any):void => {

    let promise = dispatch(getAuthUserDataThunk());

    Promise.all([promise])
        .then(()=>{
        dispatch(initialisedSuccess());
    })

};

export default appReducer;