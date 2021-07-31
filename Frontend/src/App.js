import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Account from './Components/Pages/Account';
import Login from './Components/Pages/Login';
import AddImg from './Components/Pages/AddImg';

import "./App.css";



function App() {
    // const [Loaded, setLoaded] = useState(null)
    const [redirect, setredirect] = useState({
        redirect: false,
        username : ""
    })

    const getInfo = () =>{
        axios.get("/manageAccount/")
        .then(res =>{
            console.log(res)
            if(res.data.status === "failed"){
                setredirect({
                    redirect : true,
                    username: res.data.username
                })
            } else{
                setredirect({
                    redirect : false,
                    username: res.data.username
                })
            }
        })
    }

    useEffect(() => {
        getInfo()
    }, [])
    
    return (
        <Router>
            <Navbar  redirect={redirect}/>
            <Switch>
                <Route path="/" exact> <Home redirect={redirect} /> </Route>



                <Route path="/account" exact> <Account  redirect={redirect} /> </Route>
                <Route path="/signup"  exact> <SignUp   redirect={redirect} />  </Route>
                <Route path="/login"   exact> <Login    redirect={redirect} />  </Route>
                
                <Route path="/addimg"  exact> <AddImg   redirect={redirect} /> </Route>

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
