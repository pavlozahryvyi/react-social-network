import React from "react";
import styles from './Message.module.css';


const Message = (props) => {

    console.log('--- Message props ', props);

    return (
        <div className={styles.message}>{props.message}</div>
    )
};

export default Message;