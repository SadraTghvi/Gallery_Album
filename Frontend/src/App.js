import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import "./App.css"



function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="*">
                        <Home text={"you are in the wrong path"} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

ReactDOM.render(
    <App />
    ,document.getElementById("root")
    )
