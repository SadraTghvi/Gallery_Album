import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Test() {
    const info = useSelector(state => state.getinfo)

    const clicked = () =>{
        console.log(info)
    }

    return (
        <div className="test">
           <button onClick={clicked}></button>
        </div>
    )
}

export default Test
