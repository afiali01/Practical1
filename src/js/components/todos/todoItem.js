import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";

//make one item

const todoItem = function(){
    let todoData = dataFetcher()
    let item = document.createElement('li')
    item.innerHTML = todoData[0]
    
    return item

}

export default todoItem
