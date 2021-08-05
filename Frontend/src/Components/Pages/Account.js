import axios from 'axios';
import React, { useEffect,useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../actions/getUser';

import { Link, Redirect, useHistory } from 'react-router-dom';

import "./Account.css"

function Account() {
    const [redirect, setredirect] = useState(false)
    
    

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    
    const info = useSelector(state => state.getinfo)

    useEffect(() => {
        setredirect(!info.isLoggedIn)
    }, [info])

    useEffect(() => {
        console.log(redirect)
    }, [redirect])


    const logOut = () =>{
        window.location.replace("manageAccount/logout/");
    }

    
    if(redirect){
        return <Redirect to="/login" />
    }
    
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

