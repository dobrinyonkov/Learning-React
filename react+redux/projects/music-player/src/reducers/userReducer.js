const userReducer = function (state = {
    name: "Bob",
    age: 22
}, action) {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            }
            break;
        case "CHANGE_AGE":
            state = {
                ...state,
                age: action.payload,
            }
            break;

        default:
            break;
    }

    return state;
}

export default userReducer;