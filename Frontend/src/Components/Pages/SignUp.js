import React, {useState,useEffect} from 'react'
import { Redirect, useHistory } from "react-router-dom";
import axios from 'axios'

import "./SignUp.css"
import Info from '../Info'

import Cookies from 'js-cookie'

const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.currentScript.getAttribute('csrfToken') 
            },
    };

function SignUp() {
    const [color,setColor] = useState("black")
    const [text,setText] = useState(" ")
    const [userPass,setUserPass] = useState({username:"",password:""})
    const [needToRedirect,setNeedToRedirect] = useState(false)

    const history = useHistory()

   

    

    var info = <> </>

    

    const sendForm = () =>{
        axios.post('manageAccount/signup/',{
            username:userPass.username,
            password:userPass.password
        },config)
        .then(res =>{
            if (res.data.status === "success"){
                setColor("green")
                setText("your account has been successfully registerd")
                setNeedToRedirect(true)
            }else{  
                info = <Info color={"red"} text={res.data.status} />
                setColor("red")
                setText("your email has already being registered")

            }
        })
    }

    if (needToRedirect){
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
            <h1 className="text">Sign Up</h1>
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

export default SignUp
