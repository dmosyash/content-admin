import { FETCH_QUESTION, FETCH_INTERACTION, FETCH_OPTIONS } from './action';

export function questions(state = null, action) {
    switch (action.type) {
        case FETCH_QUESTION:
            return action.payload.data;
        default:
            return state;    
    }
}

export function interaction(state = null, action) {
    switch (action.type) {
        case FETCH_INTERACTION:
            return action.payload.data; 
        default:
            return state;    
    }
}

export function options(state = null, action) {
    switch (action.type) {
        case FETCH_OPTIONS:
            return action.payload.data;
        default:
            return state;    
    }
}