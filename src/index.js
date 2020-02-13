import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";

/*
let postData = [
    {id:1, message: 'Hi, how are you?', likesCount: 12},
    {id:2, message: 'My first react app!', likesCount: 32},
    {id:3, message: 'COOOOOOOOOOOOOOL!!!', likesCount: 15},
    {id:4, message: 'React is cool!', likesCount: 45},
];

let dialogData = [
    {id: 1, name: 'Pavel'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Egor'},
    {id: 4, name: 'Sasha'},
];

let messagesData = [
    {id: 1, message: 'Yo!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'Hi!'},
];
*/

/*ReactDOM.render(<App postData = {state.postData}  dialogData = {state.dialogData} messagesData = {state.messagesData}/>,
                document.getElementById('root'));*/
ReactDOM.render(<App state = {state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
