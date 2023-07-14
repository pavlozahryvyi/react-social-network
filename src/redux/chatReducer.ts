// import { stopSubmit } from 'redux-form';
// import { securityAPI } from '../api/security-api';
// import { authAPI } from '../api/auth-api';
// import { InferActionsTypes, BaseThunkType } from './redux-store';
// import { chatApi, ChatMessageType } from '../api/chat-api';
// import { Dispatch } from 'redux';

// const MESSAGES_RESEIVED = 'MESSAGES_RESEIVED';

// const initialState = {
//   messages: [] as ChatMessageType[]
// };

// type initialStateType = typeof initialState;
// type ActionType = InferActionsTypes<typeof chatActions>;
// type ThunkType = BaseThunkType<ActionType | ReturnType<typeof stopSubmit>>;

// const chatReducer = (
//   state = initialState,
//   action: ActionType
// ): initialStateType => {
//   switch (action.type) {
//     case MESSAGES_RESEIVED:
//       return {
//         ...state,
//         messages: [...state.messages, ...action.payload]
//       };
//     default:
//       return state;
//   }
// };

// const newMessageHandler =
//   (dispatch: Dispatch) => (messages: ChatMessageType[]) => {
//     dispatch(chatActions.messagesReseived(messages));
//   };

// export const chatActions = {
//   messagesReseived: (messages: ChatMessageType[]) =>
//     ({
//       type: MESSAGES_RESEIVED,
//       payload: messages
//     } as const)
// };

// export const startChatting = (): ThunkType => async (dispatch) => {
//   chatApi.subscribe((messages) => {
//     dispatch(chatActions.messagesReseived(messages));
//   });
// };

// export const stopChatting = (): ThunkType => async (dispatch) => {
//   chatApi.unSubscribe((messages) => {
//     dispatch(chatActions.messagesReseived(messages));
//   });
// };

// export default chatReducer;
