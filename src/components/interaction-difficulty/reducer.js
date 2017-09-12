import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';
import { SELECT_QUES } from './../vanilla-list/action';
import { boardGrade } from './../../reducers/boardGrade';
import { GET_BG } from './action';

function getBoardGradeDetails(data) {
    const bg = _.mapKeys(boardGrade(), 'id');
    let json = {
        difficulty: data.difficulty,
        board: bg[data.ideal_bg].board,
        grade: bg[data.ideal_bg].grade
    }
    return json;
}

function getIdealBG(data) {
    const bg = _.mapKeys(boardGrade(), 'id');
    for (let [k, v] of Object.entries(bg)) {
        // do something with k and v
        console.log(v.board,' === ',data.board,' && ',v.grade,' === ',data.grade)
        if(v.board === data.board && v.grade === data.grade) {
            return k;
        }
    }
    return null;
}

export default function DifficultyReducer(state = {}, action) {
    switch (action.type) {
        case SELECT_QUES:
            let data = action.payload;
            let details = getBoardGradeDetails(data)
            return details;
        case GET_BG:
            let formData = action.payload;
            const ideal_bg = getIdealBG(formData);
            formData.ideal_bg = ideal_bg; 
            action.callback(ideal_bg);
            return formData;
        default:
            return state;    
    }
}