import axios from "axios";

export const addPics = (formData,config) => (dispach) =>{
    axios.post("addImg/getImg/",formData,config)
    .then(res =>{
        if (res.data.status === "success"){
            dispach({type:"picSave",payload:res.data.text})
        } else{
            dispach({type:"picDidntSave",payload:res.data.text})
        }
    })
}

