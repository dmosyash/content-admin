import _ from 'lodash';
import { FETCH_BOARD, FETCH_GRADE, FETCH_BOARD_GRADE } from './action';

let bg = null;

export function Boards(state = null, action) {
    switch (action.type) {
        case FETCH_BOARD:
            return action.payload.data;
        default:
            return state;    
    }
}

export function Grades(state = null, action) {
    switch (action.type) {
        case FETCH_GRADE:
            return action.payload.data; 
        default:
            return state;    
    }
}

export function BoardGradeFetcher(state = null, action) {
    switch (action.type) {
        case FETCH_BOARD_GRADE:
            bg = _.mapKeys(action.payload.data, 'id');
            return bg;
        default:
            return state;    
    }
}

export function BoardGrade() {
    return bg;
}