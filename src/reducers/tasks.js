import * as types from '../constants/ActionTypes';
import { type } from 'os';
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState,action) => {
    switch(action.types){
        case types.LIST_ALL:
            return state;
        case type.ADD_TASK:
        {
            console.log(action)
            return state;
        }
        default: return state
    }
};

export default myReducer;