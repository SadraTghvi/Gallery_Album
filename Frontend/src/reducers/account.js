
const ifPrint = (state = 0, { type, payload }) => {
    switch (type) {

        case "print":
            return state + 1

        case "dontprint":
            return state - 1

        default:
            return state
    }
}

export default ifPrint;