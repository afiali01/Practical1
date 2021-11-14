import {getStore, updateStore} from './store'

function reducer(action){
    switch(action.type){
        case "delete":
            return "remove employee";
        case "edit":
            return "edit employee";
        case "add":
            return "add new employee";
        default: return store
        
    }
}

export default reducer