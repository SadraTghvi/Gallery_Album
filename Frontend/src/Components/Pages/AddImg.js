import React,{useEffect, useState} from 'react'
import { Redirect } from 'react-router'

import Info from "../Info"

import { useDispatch, useSelector } from 'react-redux'
import { addPics } from '../../actions/addPics'


import "./AddImg.css"

const config = {
    headers:{
        // 'content-type': 'multipart/form-data',
        'Content-Type': 'application/json',
        'X-CSRFToken': document.currentScript.getAttribute('csrfToken'),
    }
} 


function AddImg(props) {

    const [file, setfile] = useState(null)
    // const [info, setinfo] = useState({
    //     text : "",
    //     color : ""
    // })
    const [data, setdata] = useState({
        title: "",
        discription: ""
    })
    
    const dispatch = useDispatch()


    const Picinfo = useSelector(state => state.info)

    var info = <> </>
    if(Picinfo.status !== null){
        console.log("slm")
        if(Picinfo.status){
            info = <>
                    <div className="info">
                        <Info text={Picinfo.text} color="green" />
                    </div> 
                   </>
        } else{
            info = <>
                    <div className="info">
                        <Info text={Picinfo.text} color="red" />
                    </div> 
                   </>
        }
    }

    

    useEffect(() => {
        console.log(Picinfo)
    }, [Picinfo])

    

    const sendForm = (e) =>{
        e.preventDefault()
        const url = "addImg/getImg/"
        const formData = new FormData();
        formData.append("file",file)
        formData.append("title",data.title)
        formData.append("discription",data.discription)

        // axios.post(url,formData,config)
        // .then(res =>{
        //     if (res.data.status === "success"){
        //         setinfo({text:res.data.text,color:"green"})
        //     } else{
        //         console.log(res.data.text)
        //         setinfo({text:res.data.text,color:"red"})
        //     }
        // })

        dispatch(addPics(formData,config))



    }

    const onChange = (e) =>{
        setfile(e.target.files[0])
    }

    // useEffect(() => {
    //     console.log(file)
    // }, [file])


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
            {info}
        </>
    )
}

export default AddImg

