var initialState = false;
var myReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'TOGGLE_STATUS' : {
            var newState = state;
            newState = !newState;
            return newState;
        }
        default: return state;
    }
}
export default myReducer;