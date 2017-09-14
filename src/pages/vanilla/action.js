import axios from 'axios';
import { API_BASE_URL } from './../../services/configVariables'

export const GET_CONTENT = 'GET_CONTENT';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

export function getContent(id) {
    let request = axios({
        method: 'get',
        url: `${API_BASE_URL}content/content/${id}/`,
        headers: auth
    });
    return {
        type: GET_CONTENT,
        payload: request,
    };
}