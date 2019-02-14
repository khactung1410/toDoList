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
        };
        case types.DELETE_TASK:
        {
            const id = action.task.id;
            const index = findIndex(id);
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        };
        case types.UPDATE_STATUS:
        {
            const id = action.task.id;
            state.forEach( task => {
                if(task.id === id) {
                    task.status = !task.status;
                }
            })
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        };
        default: return state
    }
};

var s4 = () => { //tạo ra một số random
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var generateRandomID = () => {
    return s4() + s4() + '-' + s4() + ' ' +s4() +s4() +' '+ s4();
}
var findIndex = (id) => {
    console.log(111111111);
    var indexResult = -1;
    initialState.forEach((task,index) => {
        if(task.id === id) indexResult = index;
    });
    return indexResult;
}
export default myReducer;