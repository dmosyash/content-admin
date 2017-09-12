import { SELECT_INTERACTION } from './../../services/interaction/action';
import { BoardGrade } from './../../services/boardGrade/reducer';
import { GET_BG, GET_BG_DETAILS } from './action';

function getBoardGradeDetails(data) {
    const bg = BoardGrade();
    if(bg === null || data === null) {
        return null;
    }
    let json = {
        difficulty: data.difficulty.toString(),
        board: bg[data.ideal_bg].board,
        grade: bg[data.ideal_bg].grade
    }
    console.log(json);
    return json;
}

function getIdealBG(data) {
    for (let [k, v] of Object.entries(BoardGrade())) {
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
        case SELECT_INTERACTION:
        case GET_BG_DETAILS:
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