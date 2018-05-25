export function addSongs(files) {
    return dispatch => {
        var promises = [];
        for (let i = 0; i < files.length; i++) {
            const element = files[i];
            var fd = new FormData();
            fd.append('element1', 'test');
            fd.append('element2', element);
            promises.push(fetch('http://localhost:9000/file/api/upload', {
                method: 'POST',
                body: fd
            }).then((response) => response.json()));
        }
        Promise.all(promises)
            .then(function (data) {
                console.log(data);
                dispatch({
                    type: "ADD_SONGS",
                    payload: data

                })
            }).catch(err => alert(err));

    }
}

export function fetchSongs() {
    return dispatch => {
        return fetch("http://localhost:9000/songs")
            .then(handleErrors)
            .then(res => res.json())
            .then(function (data) {
                return dispatch({
                    type: "INIT_SONGS",
                    payload: data

                })
            }).catch(err => alert(err));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

