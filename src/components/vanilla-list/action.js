export const SELECT_QUES = 'SELECT_QUES';

export function selectQuestion(data) {
    return {
        type: SELECT_QUES,
        payload: data
    };
}