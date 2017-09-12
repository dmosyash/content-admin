import { SELECT_QUES } from './action';

export default function QuestionReducer(state = {}, action) {
    switch (action.type) {
        case SELECT_QUES:
            return action.payload; 
        default:
            return state;    
    }
}