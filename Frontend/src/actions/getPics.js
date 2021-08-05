import axios from "axios";

export const getPics = () => (dispatch) =>{
    axios.get('api/albums/')
    .then(res => {
        dispatch({type: "getPics",payload:res.data})
        console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
}

