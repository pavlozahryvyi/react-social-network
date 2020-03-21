import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dislogsReducer";
import sendImg from "./../../img/paper-plane-1.png"

const Dialogs = (props) => {

    //console.log('--- Dialogs props ', props);

    let dialogData = props.dialogData;
    let messagesData = props.messagesData;

    //array of components
    let dialogsElements = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map(messageItem => <Message message={messageItem.message}/>);

    let linkTextareaMessages = React.createRef();

    let buttonEvent = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onUpdateMessage = () => {
        let text = linkTextareaMessages.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                            value={props.newMessageText}
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