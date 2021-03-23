import { combineReducers } from 'redux';
import TaskReducer from '../reducer/Tasks';

const rootReducer = combineReducers({
    tasks: TaskReducer
});

export default rootReducer;