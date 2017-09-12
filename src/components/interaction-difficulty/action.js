import axios from 'axios';
import { API_BASE_URL } from './../../services/configVariables'

export const GET_BG = 'GET_BG';
export const GET_BG_DETAILS = 'GET_BG_DETAILS';
export const INSERT_INTERACTION = 'INSERT_INTERACTION';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

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

export function insertDifficulty(data, callback) {
    let request = axios({
        method:'post',
        url:`${API_BASE_URL}content/interaction/`,
        data: data,
        headers: auth
      });
    request.then(response => callback(response));
    return {
        type: INSERT_INTERACTION,
        payload: request,
    };
}