export const GET_BG = 'GET_BG';

export function changeBG(data, callback) {
    return {
        type: GET_BG,
        payload: data,
        callback: callback
    };
}