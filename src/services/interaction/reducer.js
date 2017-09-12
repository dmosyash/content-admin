import { SELECT_INTERACTION } from './action';

export default function InteractionReducer(state = null, action) {
    switch (action.type) {
        case SELECT_INTERACTION:
            return action.payload; 
        default:
            return state;    
    }
}