const songsReducer = function (state = {
    songs: []
}, action) {
    switch (action.type) {
        case "ADD_SONGS":
            state = {
                ...state,
                songs: [...state.songs, ...action.payload]
            }
            console.log(state);
            break;
        case "INIT_SONGS":
            state = {
                ...state,
                songs: action.payload
            }
            console.log(state);
            break;
        default:
            break;
    }

    return state;
}

export default songsReducer;