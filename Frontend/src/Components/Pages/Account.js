import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';

import "./Account.css"

function Account() {
    const [redirect, setredirect] = useState(false)

    let history = useHistory();


    const logOut = () =>{
        window.location.replace("manageAccount/logout/");
    }

    // const getInfo = () =>{
    //     axios.get("/manageAccount/")
    //     .then(res =>{
    //         console.log(res)
    //         if(res.data.status === "failed"){
    //             setredirect(true)
    //         } else{
    //             setredirect(false)
    //         }
    //     })
    // }

    
    // useEffect(() => {
    //     getInfo()
    // }, [])

    
    return (
        <>
            <div className="main">
                <div className="logOut">
                    <div className="text">You Sure You Wana Logout?</div>
                    
                    <button
                        className="confirm btn btn-danger"
                        onClick={logOut}
                    >
                        Yes, Log Me Out
                    </button>

                    <Link to="/" className='btn-mobile'>
                        <button
                            className="deny btn btn--outline"
                            
                        >
                            Cancle
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Account

