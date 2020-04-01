import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dislogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*
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
                        addMessage={sendMessage}
                        dialogsPage={state}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
};
*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () =>{
           dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) =>{
            //let action = updateNewMessageTextActionCreator(text);
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;