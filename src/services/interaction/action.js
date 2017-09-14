import axios from 'axios';
import { API_BASE_URL } from './../configVariables'

export const SELECT_INTERACTION = 'SELECT_INTERACTION';
export const FETCH_INTERACTION = 'FETCH_INTERACTION';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

export function selectInteraction(data) {
    return {
        type: SELECT_INTERACTION,
        payload: data
    };
}

export function fetchInteractions(data) {
    let request = axios({
        method: 'get',
        url: `${API_BASE_URL}content/interaction/`,
        params: data,
        headers: auth
    });
    //   request.then(() => setTimeout(()=> callback(), 100));
    return {
        type: FETCH_INTERACTION,
        payload: request
    };
}