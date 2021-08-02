const loggedIn = (state = false, { type }) =>{
    switch (type) {
        case "logged":
            return !state
    
        default:
            return state
    }
}

export default loggedIn;