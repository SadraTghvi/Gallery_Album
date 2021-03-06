import axios from 'axios'

import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router'

import Cookies from 'js-cookie'
// components
import Info from '../Info'
// css
import "./Login.css"

const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.currentScript.getAttribute('csrfToken') 
            },
    };


function Login(props) {
    const [color,setColor] = useState("black")
    const [text,setText] = useState(" ")
    const [userPass,setUserPass] = useState({username:"",password:""})
    const [redirect, setredirect] = useState(false)

    const history = useHistory()

   
    const dispatch = useDispatch()
    

    var info = <> </>

    

    const sendForm = () =>{
        axios.post('manageAccount/login/',{
            username:userPass.username,
            password:userPass.password
        },config)
        .then(res =>{
            if (res.data.status === "success"){
                setColor("green")
                setText("You Logged In Successfully")
                setredirect(true)

                dispatch({type:"loggedIn", payload:userPass.username})
            }else{  
                setColor("red")
                setText(res.data.text)
            }
        })
    }

    if(redirect){
        return <Redirect to="/" />
    }

    const formHandler = (e) =>{
        e.preventDefault()
        setUserPass({
            username:user,
            password:pass,
        })
        sendForm();
    }

    let formInputs = <div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">User</span>
            <input type="text" id="user" onChange={e => setUserPass({...userPass,username:e.target.value})} name="user" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Pass</span>
            <input type="password" id="pass" onChange={e => setUserPass({...userPass,password:e.target.value})} name="pass" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    </div>

    let btn =<div>
        <button className="btn my-btn btn-outline-dark" onClick={formHandler} >Submit</button>
    </div>
    return (
        <>
            <h1 className="text">Login</h1>
            <div className="container myContainer">
                <form action="" onSubmit={formHandler}>
                    {formInputs}
                    {btn}

                    <Info color={color} text={text} />
                </form>
            </div>
        </>
    )
}


export default Login
