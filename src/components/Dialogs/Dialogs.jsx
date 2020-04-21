import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import sendImg from "./../../img/paper-plane-1.png"

const Dialogs = (props) => {

    //console.log('--- Dialogs props ', props);
    let state = props.dialogsPage;

    //console.log('---state in dialogs', state);

    let dialogData = state.dialogData;
    let messagesData = state.messagesData;

    //array of components
    let dialogsElements = dialogData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map(messageItem => <Message key={messageItem.id} message={messageItem.message}/>);

    let linkTextareaMessages = React.createRef();

    let buttonEvent = () => {
        props.addMessage();
    };

    let onUpdateMessage = () => {
        let text = linkTextareaMessages.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsBlock}>

                {dialogsElements}

            </div>
            <div className={styles.messagesBlock}>

                {messagesElements}

                <div className={styles.createNewMessageBlock}>
                    <div className={styles.textareaBlock}>
                        <textarea
                            onChange={onUpdateMessage}
                            ref={linkTextareaMessages}
                            value={state.newMessageText}
                        ></textarea>
                    </div>
                    <div className={styles.btnBlock}>
                        <button onClick={buttonEvent}><img src={sendImg} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;