import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./SignUp.css"
import Cookies from 'js-cookie'

const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.currentScript.getAttribute('csrfToken') 
            },
    };

function SignUp() {

    const [userPass,setUserPass] = useState({username:"",password:""})

    useEffect(() => {
        console.log(userPass)    
    }, [userPass])

    

    const sendForm = () =>{
        axios.post('http://127.0.0.1:8000/api/signup/',{
            username:userPass.username,
            password:userPass.password
        },config)
        
    
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
           <div className="container myContainer">
                <form action="" onSubmit={formHandler}>
                    {formInputs}
                    {btn}
                </form>
           </div>
        </>
    )
}

export default SignUp
