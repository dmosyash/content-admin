import axios from 'axios';
import { API_BASE_URL } from './../configVariables'

export const FETCH_BOARD = 'FETCH_BOARD';
export const FETCH_GRADE = 'FETCH_GRADE';
export const FETCH_BOARD_GRADE = 'FETCH_BOARD_GRADE';

const auth = {
    'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGxhdWdoZ3VydS5jb20iLCJleHAiOjE1MjkwNDI2NzAsInVzZXJuYW1lIjoiYWRtaW5AbGF1Z2hndXJ1LmNvbSJ9.0ZFnjLgcquhLFToynitb5bwpWykincoUCnUlzvGJQ5U'
}

export function fetchBoards() {
    let request = axios({
        method:'get',
        url:`${API_BASE_URL}user/boards/`,
        headers: auth
      })
    return {
        type: FETCH_BOARD,
        payload: request
    };
}

export function fetchGrades() {
    let request = axios({
        method:'get',
        url:`${API_BASE_URL}user/grades/`,
        headers: auth
      })
    return {
        type: FETCH_GRADE,
        payload: request
    };
}

export function fetchBoardGrade(callback) {
    let request = axios({
        method:'get',
        url:`${API_BASE_URL}admin/board_grade/`,
        headers: auth
      });
      request.then(() => setTimeout(()=> callback(), 100));
    return {
        type: FETCH_BOARD_GRADE,
        payload: request
    };
}