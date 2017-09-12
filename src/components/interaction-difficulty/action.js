export const GET_BG = 'GET_BG';
export const GET_BG_DETAILS = 'GET_BG_DETAILS';

export function changeBG(data, callback) {
    return {
        type: GET_BG,
        payload: data,
        callback: callback
    };
}

export function getBGDetails(data) {
    return {
        type: GET_BG_DETAILS,
        payload: data
    }
}