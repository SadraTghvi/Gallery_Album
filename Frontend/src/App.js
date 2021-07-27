import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Account from './Components/Pages/Account';
import Login from './Components/Pages/Login';

import "./App.css";



function App() {
    const [Loaded, setLoaded] = useState(null)
    
    return (
        <Router>
            <Navbar  />
            <Switch>
                <Route path="/" exact component={Home}/>



                <Route path="/account" exact component={Account}/>
                <Route path="/signup" exact component={SignUp}/> 
                <Route path="/login" exact component={Login}/> 

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
