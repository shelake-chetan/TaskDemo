import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './ActionTypes';

export const addTask = (data) => {
    return { type: ADD_TASK, payload: data };
}

export const deleteTask = (id) => {

    return { type: DELETE_TASK, payload: id }
}

export const updateTask = (data) => {
    return { type: EDIT_TASK, payload: data }
}
