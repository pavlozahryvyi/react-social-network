import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dislogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState().dialogsPage;


                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onUpdateMessage = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };

                return(
                    <Dialogs
                        updateNewMessageText={onUpdateMessage}
                        addMessageActionCreator={sendMessage}
                        dialogsPage={state}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;