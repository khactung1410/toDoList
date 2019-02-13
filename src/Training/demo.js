import {createStore} from 'redux';
import {status,sort} from './actions/index';
import myReducer from './reducers/index.js';


const store = createStore(myReducer);
// console.log(store.getState());

//Thực hiện công việc thay đổi status
store.dispatch(status());
// console.log(store.getState())

//Thực hiện sắp xếp tên từ z-a
store.dispatch(sort({
    by : 'name',
    value : -1
}))
// console.log(store.getState())