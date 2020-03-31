import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {

    let ProfileComponent = () => <Profile />;
    let DialogsComponent = () => <DialogsContainer/>;

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-block'>
                <div className="app-wrapper-content">
                    <Route exact path='/' render={ProfileComponent}/>
                    <Route path='/profile' render={ProfileComponent}/>
                    <Route path='/dialogs' render={DialogsComponent}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </div>
    );
}

export default App;
