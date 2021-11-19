import { get } from 'lodash';
import {getStore, updateStore} from './store'

function reducer(action){
    switch(action.type){
        case "delete":
            const store = getStore();
            const index = action.payload.index;
            const newStore = [...store.slice(0, index), ...store.slice(index+1)]
            updateStore(newStore)
            action.cb()
        case "edit":
            const oldStore = getStore();
            const updatedTodo = action.payload.object;
            const updateindex = getStore().findIndex((item) => {
                return (item.id === object.id)
            });
            const updated = oldStore.splice(updateindex, 1, updatedTodo)
            updateStore(updated)
            action.cb()
        case "add":
            return "add new todo";
        default: return store
        
    }
}

export default reducer