import React from 'react'
import "./Account.css"

function Account() {
    const back2Home = () =>{

    }

    const logOut = () =>{

    }

    return (
        <>
            <div className="main">
                <div className="logOut">
                    <div                        className="text">You Sure You Wana Logout?</div>
                    <button onClick={logOut}    className="confirm btn btn-danger">Yes, Log Me Out</button>
                    <button onClick={back2Home} className="deny btn btn--outline">     Cancle     </button>
                </div>
            </div>
        </>
    )
}

export default Account

