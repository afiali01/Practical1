import makeElement from "../../utils/makeElement";
import todoItem from "./todoItem";

const todoList = function(){
    const list = document.createElement('div')
    list.classList.add('list-items')
    //make multiple items
    list.appendChild(todoItem())
    return list
}

export default todoList
