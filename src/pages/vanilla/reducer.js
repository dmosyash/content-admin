import { GET_CONTENT } from './action';

const initState = {
    name: '',
    content_type: '',
    is_approved: false
}

export default function content(state = initState, action) {
    switch (action.type) {
        case GET_CONTENT:
            return action.payload.data;
        default:
            return state;
    }
}