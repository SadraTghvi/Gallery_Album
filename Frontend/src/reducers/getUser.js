const initialState = {
    username: "anonymous",
    isLoggedIn: false
}

const getinfo = (state = initialState, { type, payload }) => {
    switch (type) {

    case "loggedIn":
        return { username:payload,isLoggedIn:true }

    case "notLoggedIn":
        return { ...state, username:"anonymous" }

    default:
        return state
    }
}

export default getinfo;