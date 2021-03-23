
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from '../action/ActionTypes';

const initialState = {
    tasks: []
}

export default TaskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };

        case DELETE_TASK:
            const taskArray = state.tasks;
            const index = taskArray.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                taskArray.splice(index, 1);
            }
            return { ...state, tasks: taskArray };

        case EDIT_TASK:
            const updatedTaskArray = state.tasks;
            const updateIndex = updatedTaskArray.findIndex((item) => item.id === action.payload.id);
            updatedTaskArray[updateIndex] = action.payload;
            return { ...state, tasks: updatedTaskArray };

        default:
            return state;
    }

}