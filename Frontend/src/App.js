import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Account from './Components/Pages/Account';

import "./App.css";



function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>

                <Route path="/account" exact component={Account}/>


                <Route path="/signup" exact component={SignUp}/>

            </Switch>
            <Footer />
        </Router>
    )
}

export default App

ReactDOM.render(
    <App />
    ,document.getElementById("root")
    )
