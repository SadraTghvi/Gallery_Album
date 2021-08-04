import axios from "axios"


export const getUserInfo = () => (dispatch) =>{
    axios.get("/manageAccount/")
    .then(res =>{
      if(res.data.status === "true"){
        dispatch({type: "loggedIn",payload:res.data.username})
        console.log(res)
      }else{
        dispatch({ type:"notLoggedIn" })
      }
    })
}