import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'

const App = (props) => {

    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs />} />
                    <Route path="/profile" render={() => <Profile postsData={props.postsData}/>} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/settings" render={() => <Settings />} />
                </div>
            </div>
        </Router>
    );
}


export default App;
