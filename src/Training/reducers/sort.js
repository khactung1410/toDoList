var initialState = {
    by : 'name',
    value : 1 // 1: tang ; -1 : giam
}
var myReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'SORT' : {
            var newState = Object.assign({},state);
            newState = {
                by : action.sort.by,
                value : action.sort.value
            }
            return newState;
        }
        default: return state;
    }
}
export default myReducer;