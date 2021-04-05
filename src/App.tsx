import React from 'react';
import './App.css';
import Boards from "./components/Boards/Boards";
import Tasks from "./components/Tasks/Tasks";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/boards" component={Boards}/>
                <Route exact path="/board/:id" component={Tasks}/>
                <Redirect to="/boards"/>
            </Switch>
        </Router>
    );
}

export default App;
