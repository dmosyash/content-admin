import { SELECT_INTERACTION } from './../../services/interaction/action';
import { UPDATE_FILES_DATA } from './action';

function getFilesDetails(data) {
    let json = {
        question_audio: data.question_audio,
        explanation_audio: data.explanation_audio
    }
    if(data.hasOwnProperty('question_image')) {
        json.question_image = data.question_image;
    }
    return json;
}

export default function DragDropReducer(state = {}, action) {
    switch (action.type) {
        case SELECT_INTERACTION:
            let data = action.payload;
            let details = getFilesDetails(data)
            return details;
        case UPDATE_FILES_DATA:
            let fileData = action.payload;
            console.log(fileData);
            return fileData;
        default:
            // console.log('default');
            return state;    
    }
}