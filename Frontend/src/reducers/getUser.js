const initialState = {
    username: "anonymous",
    isLoggedIn: false
}

const getinfo = (state = initialState, { type, payload }) => {
    switch (type) {

    case "loggedIn":
        return { username:payload,isLoggedIn:true }

    case "notLoggedIn":
        return { username:"anonymous",isLoggedIn:false }

    

    default:
        return state
    }
}

export default getinfo;