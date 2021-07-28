import React,{useEffect, useState} from 'react'
import axios, { post } from 'axios'
import './AddImg.css'

const config = {
    headers:{
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/json',
        'X-CSRFToken': document.currentScript.getAttribute('csrfToken'),
    }
} 

const config2 = {
    headers:{
        // 'content-type': 'multipart/form-data',
        'Content-Type': 'application/json',
        'X-CSRFToken': document.currentScript.getAttribute('csrfToken'),
    }
} 

function AddImg() {
    const [file, setfile] = useState(null)
    const [data, setdata] = useState({
        title: '',
        discription: '',
        id: null
    })

    useEffect(() => {
        console.log(data)
    }, [data])

    const sendText = (e) =>{
        e.preventDefault()
        axios.post('addImg/getText/',data,config2)
        .then(res =>{
            console.log(res)
        })
    }

    const sendImg = () =>{
        fileUpload().then(res =>{
            console.log(res)
            setdata({...data,id:res.data.albumId})
        })
    }
    
    

    const onChange = (e) =>{
        setfile(e.target.files[0])
    }

    const fileUpload = () => {
        const url = 'addImg/getImg/'
        const formData = new FormData();
        formData.append('file', file)
        formData.append('title', data.title)
        formData.append('discription', data.discription)

        return post(url, formData, config)
    }

    useEffect(() => {
        console.log(file)
    }, [file])



    return (
        <>
                    {/* <h1 >File Upload</h1> */}
            <div className='addImg'>
                    <div className='input-group mb-3'>
                        <span className='input-group-text' id='basic-addon1'>Title</span>
                        <input type='text'  onChange={e => setdata({...data,title:e.target.value})} name='user' className='form-control' placeholder='...' aria-label='Username' aria-describedby='basic-addon1' />
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text' id='basic-addon1'>Discription</span>
                        <input type='text'  onChange={e => setdata({...data,discription:e.target.value})} name='user' className='form-control' placeholder='...' aria-label='Username' aria-describedby='basic-addon1' />
                    </div>
                    <input required  type='file' onChange={onChange} />
                    <button className='btn btn-danger' type='submit' onClick={sendImg}>Upload Img</button>
                    <button className='btn btn-dark' type='submit' onClick={sendText}>Set Img text</button>
            </div>
        </>
    )
}

export default AddImg

