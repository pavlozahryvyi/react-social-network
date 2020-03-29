import React from 'react';
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

    //console.log('--- App props ', props);


    let ProfileComponent = () => <Profile
        /*postData={props.state.profilePage.postData}*/
        store = {props.store}
        /*state = {props.state}
        newPostText={props.state.profilePage.newPostText}
        dispatch={props.dispatch}*/
    />;
    let DialogsComponent = () => <DialogsContainer store = {props.store}
        /*dialogData={props.state.dialogsPage.dialogData}
        messagesData={props.state.dialogsPage.messagesData}
        newMessageText={props.state.dialogsPage.newMessageText}
        dispatch={props.dispatch}*/
    />;

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-block'>
                    <div className="app-wrapper-content">
                        {/*<Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>*/}
                        <Route exact path='/' render={ProfileComponent}/>
                        <Route path='/profile' render={ProfileComponent}/>
                        <Route path='/dialogs' render={DialogsComponent}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
