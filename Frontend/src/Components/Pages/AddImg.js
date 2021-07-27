import React,{useEffect, useState} from 'react'
import axios, { post } from 'axios'

const config = {
    headers:{
        'content-type': 'multipart/form-data',
        'Content-Type': 'application/json',
        'X-CSRFToken': document.currentScript.getAttribute('csrfToken'),
    }
} 

function AddImg() {
    const [file, setfile] = useState(null)
    const [data, setdata] = useState({
        title: "",
        discription: "",
        file: null
    })
    
    const onFormSubmit = (e) =>{
        e.preventDefault()
        fileUpload().then(res =>{
            console.log(res)
        })
    }

    const onChange = (e) =>{
        setfile(e.target.files[0])
    }

    const fileUpload = () =>{
        const url = "addImg/add/"
        const formData = new FormData();
        formData.append("file",file)

        return post(url,formData,config)
    }

    useEffect(() => {
        console.log(file)
    }, [file])



    return (
        <>
            <div className="main">
                <form action="" onSubmit={onFormSubmit}>
                    <h1 className="text">File Upload</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Title</span>
                        <input type="text" id="user" onChange={e => settext({...data,title:e.target.value})} name="user" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Discription</span>
                        <input type="text" id="user" onChange={e => settext({...data,discription:e.target.value})} name="user" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <input  type="file" onChange={onChange} />
                    <button className="btn btn--primary" type="submit">Upload</button>
                </form>
            </div>
        </>
    )
}

export default AddImg

