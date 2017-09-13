import axios from 'axios';
import { API_BASE_URL } from './../../services/configVariables'

export const INSERT_QUESTION = 'INSERT_QUESTION';
export const INSERT_OPTIONS = 'INSERT_OPTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const UPDATE_OPTIONS = 'UPDATE_OPTIONS';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

function getUrlnKey(contentType) {
    let apiUrl = 'content/vanilla';
    let key = 'vanilla';
    if(contentType === 'vanilla_image') {
        apiUrl = 'content/vanilla_image';
    }
    return {
        apiUrl, key
    }
}

export function insertQuestion(data, interactionId, contentType) { 
    let urlKey = getUrlnKey(contentType);   
    data.interaction = interactionId;
    let request = axios({
        method:'post',
        url:`${API_BASE_URL}${urlKey.apiUrl}/`,
        data: data,
        headers: auth
      });
    return {
        type: INSERT_QUESTION,
        payload: request,
    };
}

export function insertOption(data, interactionId, contentType) { 
    let urlKey = getUrlnKey(contentType);   
    data[urlKey.key] = interactionId;
    let request = axios({
        method:'post',
        url:`${API_BASE_URL}${urlKey.apiUrl}_option/`,
        data: data,
        headers: auth
      });
    return {
        type: INSERT_OPTIONS,
        payload: request,
    };
}

export function updateQuestion(data, interactionId, contentType) { 
    let urlKey = getUrlnKey(contentType);   
    data.interaction = interactionId;
    let request = axios({
        method:'put',
        url:`${API_BASE_URL}${urlKey.apiUrl}/${data.interaction}/`,
        data: data,
        headers: auth
      });
    return {
        type: UPDATE_QUESTION,
        payload: request,
    };
}

export function updateOption(data, interactionId, contentType) { 
    let urlKey = getUrlnKey(contentType);   
    data[urlKey.key] = interactionId;
    let request = axios({
        method:'put',
        url:`${API_BASE_URL}${urlKey.apiUrl}_option/${data.id}/`,
        data: data,
        headers: auth
      });
    return {
        type: UPDATE_OPTIONS,
        payload: request,
    };
}