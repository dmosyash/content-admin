import axios from 'axios';
import { API_BASE_URL } from './../../services/configVariables'

export const FETCH_QUESTION = 'FETCH_QUESTION';
export const FETCH_INTERACTION = 'FETCH_INTERACTION';
export const FETCH_OPTIONS = 'FETCH_OPTIONS';
export const SET_QUESTION = 'SET_QUESTION';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

export function fetchQuestion(data) {
    let request = axios({
        method:'get',
        url:`${API_BASE_URL}content/vanilla/`,
        params: data,
        headers: auth
      })
    return {
        type: FETCH_QUESTION,
        payload: request
    };
}

export function fetchInteraction(data) {
    let request = axios({
        method:'get',
        url:`${API_BASE_URL}content/interaction/`,
        params: data,
        headers: auth
      });
    //   request.then(() => setTimeout(()=> callback(), 100));
    return {
        type: FETCH_INTERACTION,
        payload: request
    };
}

export function fetchOptions(data) {
    let request = axios({
        method:'get',
        url:`${API_BASE_URL}content/vanilla_option/`,
        params: data,
        headers: auth
      })
    return {
        type: FETCH_OPTIONS,
        payload: request
    };
}