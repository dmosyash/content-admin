import axios from 'axios';
import { API_BASE_URL } from './../../services/configVariables'

export const REJECT_CONTENT = 'REJECT_CONTENT';
export const APPROVE_CONTENT = 'APPROVE_CONTENT';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

export function rejectContent(id) {
    let request = axios({
        method: 'patch',
        url: `${API_BASE_URL}content/content/${id}/`,
        data: { is_approved: false },
        headers: auth
    });
    return {
        type: REJECT_CONTENT,
        payload: request,
    };
}

export function approveContent(id, callback) {
    let request = axios({
        method: 'patch',
        url: `${API_BASE_URL}content/content/${id}/`,
        data: { is_approved: true },
        headers: auth
    });
    request.then(() => callback())
    return {
        type: APPROVE_CONTENT,
        payload: request,
    };
}