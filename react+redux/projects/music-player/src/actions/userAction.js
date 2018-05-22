export function setName (name) {
    return {
        type: 'SET_NAME',
        payload: name
    };
}

export function setAge (age) {
    return {
        type: 'SET_AGE',
        payload: age
    };
}

export function GET_TEST (age) {
    return {
        type: 'GET_TEST',
        payload: age
    };
}