import store from "./store";
import {bugAdded, bugRemoved, bugResolved} from './actions';
const unsubscribe = store.subscribe(()=>{
    console.log('store changed', store.getState());
})

store.dispatch(bugAdded('bug 1'));
unsubscribe();
store.dispatch(bugResolved(1))
console.log(store.getState());