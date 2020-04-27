import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import sendImg from "./../../img/paper-plane-1.png"
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogData = state.dialogData;
    let messagesData = state.messagesData;

    //array of components
    let dialogsElements = dialogData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map(messageItem => <Message key={messageItem.id} message={messageItem.message}/>);

    let linkTextareaMessages = React.createRef();

   //console.log('--- Dialogs props ', props.isAuth);
    let buttonEvent = () => {

        props.addMessage();
    };
    let onUpdateMessage = () => {

        let text = linkTextareaMessages.current.value;
        props.updateNewMessageText(text);
    };

    if(!props.isAuth) return <Redirect to={'/login'}/>;

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