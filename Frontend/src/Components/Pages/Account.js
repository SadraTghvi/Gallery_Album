import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';

import './Account.css'

function Account() {

    let history = useHistory();


    const logOut = () =>{
        window.location.replace('manageAccount/logout/');
    }

    var redirect;
    const getInfo = () =>{
        axios.get('manageAccount/')
        .then(res =>{
            console.log(res)
        if(res.data.status !== 'true'){
            redirect = false
        }else{
            redirect = true
        }
        })
    }

    if(redirect) return <Redirect to='/' />

    useEffect(() => {
        getInfo()
    }, [])



    return (
        <>
            <div className='main'>
                <div className='logOut'>
                    <div className='text'>You Sure You Wana Logout?</div>
                    
                    <button
                        className='confirm btn btn-danger'
                        onClick={logOut}
                    >
                        Yes, Log Me Out
                    </button>

                    <Link to='/' className='btn-mobile'>
                        <button
                            className='deny btn btn--outline'
                            
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

