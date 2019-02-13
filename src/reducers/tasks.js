import * as types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState,action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
        {
            var newTask = {
                id: generateRandomID(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            
            //save to localStorage
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        }
        case types.TOGGLE_FORM:{

        }
        case types.CLOSE_FORM:{

        }
        case types.OPEN_FORM:{
            
        }

        default: return state
    }
};

var s4 = () => { //tạo ra một số random
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var generateRandomID = () => {
    return s4() + s4() + '-' + s4() + ' ' +s4() +s4() +' '+ s4();
}
export default myReducer;