import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Provider, useDispatch} from "react-redux"
import { getUserInfo } from './actions/getUser';
import store from './store';

import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Account from './Components/Pages/Account';
import Login from './Components/Pages/Login';
import AddImg from './Components/Pages/AddImg';
import Test from './Components/Pages/Test';

import "./App.css";



function App() {
    // const [Loaded, setLoaded] = useState(null)
    // const [redirect, setredirect] = useState({
    //     redirect: false,
    //     username : ""
    // })

    // const getInfo = () =>{
    //     axios.get("/manageAccount/")
    //     .then(res =>{
    //         console.log(res)
    //         if(res.data.status === "failed"){
    //             setredirect({
    //                 redirect : true,
    //                 username: res.data.username
    //             })
    //         } else{
    //             setredirect({
    //                 redirect : false,
    //                 username: res.data.username
    //             })
    //         }
    //     })
    // }

    // useEffect(() => {
    //     getInfo()
    // }, [])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    
    return (
        <Router>
            <Navbar  />
            <Switch>
                <Route path="/" exact> <Home   /> </Route>

                <Route path="/test" exact> <Test   /> </Route>



                <Route path="/account" exact> <Account    /> </Route>
                <Route path="/signup"  exact> <SignUp     />  </Route>
                <Route path="/login"   exact> <Login      />  </Route>
                
                <Route path="/addimg"  exact> <AddImg     /> </Route>

            </Switch>
            <Footer />
        </Router>
    )
}

export default App

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("root")
    )
