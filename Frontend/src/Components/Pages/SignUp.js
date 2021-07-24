import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./SignUp.css"

function SignUp() {

    const [userPass,setUserPass] = useState({username:"",password:""})

    useEffect(() => {
        console.log(userPass)
    }, [userPass])

    // const sendForm = () =>{
    //     axios.post()
    // }

    const formHandler = (e) =>{
        e.preventDefault()
        let user= document.getElementById("user").value
        let pass= document.getElementById("pass").value
        setUserPass({
            username:user,
            password:pass,
        })
    }

    let formInputs = <div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">User</span>
            <input type="text" id="user" name="user" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Pass</span>
            <input type="password" id="pass" name="pass" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
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
