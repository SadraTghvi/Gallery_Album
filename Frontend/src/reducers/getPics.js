const initialState = []

const getPics = (state = initialState, { type, payload }) => {
    switch (type) {

    case "getPics":
        return payload

    default:
        return state
    }
}

export default getPics;