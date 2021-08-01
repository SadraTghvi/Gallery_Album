import React,{useEffect, useState} from 'react'
import axios, { post } from 'axios'
import Info from "../Info"

import "./AddImg.css"
import { Redirect } from 'react-router'

const config = {
    headers:{
        // 'content-type': 'multipart/form-data',
        'Content-Type': 'application/json',
        'X-CSRFToken': document.currentScript.getAttribute('csrfToken'),
    }
} 

const config2 = {
    headers:{
        'Content-Type': 'application/json',
        'X-CSRFToken': document.currentScript.getAttribute('csrfToken'),
    }
} 

function AddImg(props) {
    const [file, setfile] = useState(null)
    const [info, setinfo] = useState({
        text : "",
        color : ""
    })
    const [data, setdata] = useState({
        title: "",
        discription: ""
    })

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    

    const sendForm = (e) =>{
        e.preventDefault()
        const url = "addImg/getImg/"
        const formData = new FormData();
        formData.append("file",file)
        formData.append("title",data.title)
        formData.append("discription",data.discription)

        axios.post(url,formData,config)
        .then(res =>{
            if (res.data.status === "success"){
                setinfo({text:res.data.text,color:"green"})
            } else{
                console.log(res.data.text)
                setinfo({text:res.data.text,color:"red"})
            }
        })
    }

    const onChange = (e) =>{
        setfile(e.target.files[0])
    }

    // useEffect(() => {
    //     console.log(file)
    // }, [file])

    if (props.redirect) return <Redirect to="/login" />

    return (
        <>
                    {/* <h1 >File Upload</h1> */}
            <div className="addImg">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input type="text"  onChange={e => setdata({...data,title:e.target.value})} name="user" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Discription</span>
                        <input type="text"  onChange={e => setdata({...data,discription:e.target.value})} name="user" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <input required  type="file" onChange={onChange} />
                    <button className="btn btn-primary" type="submit" onClick={sendForm}>Submit</button>
            </div>
            <div className="info">
                <Info text={info.text} color={info.color} />
            </div>
        </>
    )
}

export default AddImg

