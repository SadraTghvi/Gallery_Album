import React from 'react'
import './Info.css'

const COLOR = ['black','red','green']


function Info(props) {
    const CheckColor = COLOR.includes(props.color) ? props.color : COLOR[0]

    return (
        <>
            <div className={`info_main ${CheckColor} ` }>
                <div className='text'>{props.text}</div>
            </div>
        </>
    )
}

Info.defaultProps = {
    text: '',
}

export default Info
