import { SELECT_INTERACTION, FETCH_INTERACTION } from './action';

export default function InteractionReducer(state = null, action) {
    switch (action.type) {
        case SELECT_INTERACTION:
            return action.payload; 
        default:
            return state;    
    }
}

export function interactions(state = null, action) {
    switch (action.type) {
        case FETCH_INTERACTION:
            return action.payload.data;
        default:
            return state;
    }
}