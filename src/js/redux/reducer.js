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
            const updateindex = action.payload.index;
            const updated = [...oldStore.slice(0, index), updatedTodo,  ...store.slice(index +1)]
            updateStore(updated)
            action.cb()
            
        case "add":
            const oldList = getStore();
            const newitem = action.payload.object
            const update = [...oldList, newitem]
            updateStore(update)
            action.cb()
            
    }
}

export default reducer