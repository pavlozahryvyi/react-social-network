import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dislogsReducer";
import sendImg from "./../../img/paper-plane-1.png"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    //console.log('--- Dialogs props ', props);
    let state = props.store.getState().dialogsPage;

    // console.log('---state in dialogs', state);

    let linkTextareaMessages = React.createRef();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onUpdateMessage = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs
            updateNewMessageText={onUpdateMessage}
            addMessageActionCreator={sendMessage}
            dialogsPage={state}
        />
    )
};

export default DialogsContainer;