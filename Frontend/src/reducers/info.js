const initialState = {
    status: null,
    text: null
}

const info = (state = initialState, { type, payload }) => {
    switch (type) {

    case "picSave":
        return { status:true, text:payload }

    case "picDidntSave":
        return { status:false, text:payload }
        
    default:
        return state
    }
}

export default info;