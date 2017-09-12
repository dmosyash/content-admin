import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import InteractionReducer from './../services/interaction/reducer';
import DifficultyReducer from './../components/interaction-difficulty/reducer';
import DragDropReducer from './../components/drag-drop/reducer';
import { Boards, Grades, BoardGradeFetcher } from './../services/boardGrade/reducer';
import { questions as vanilla, interaction as vanillaInteraction, options as vanillaOptions } from './../components/vanilla-list/reducer';

const rootReducer = combineReducers({
    form: formReducer,
    interactionReducer: InteractionReducer,
    boards: Boards,
    grades: Grades,
    boardGrade: BoardGradeFetcher,
    vanilla,
    vanillaInteraction,
    vanillaOptions,
    difficultyReducer: DifficultyReducer,
    dragDropReducer: DragDropReducer
})

export default rootReducer;