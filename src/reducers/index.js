import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Questions from './questions';
import {boards, grades, boardGrade } from './boardGrade';
import QuestionReducer from './../components/vanilla-list/reducer'
import DifficultyReducer from './../components/interaction-difficulty/reducer'
import DragDropReducer from './../components/drag-drop/reducer'

const rootReducer = combineReducers({
    form: formReducer,
    questions: Questions,
    questionReducer: QuestionReducer,
    boards: boards,
    grades: grades,
    boardGrade: boardGrade,
    difficultyReducer: DifficultyReducer,
    dragDropReducer: DragDropReducer
})

export default rootReducer;