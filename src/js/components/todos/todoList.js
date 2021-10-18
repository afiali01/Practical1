import makeElement from "../../utils/makeElement";
import todoItem from "./todoItem";
import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";

const todoList = function(){
    const list = document.createElement('div')
    list.classList.add('list-items')
    //make multiple items
    list.appendChild(todoItem(0))
    // list.appendChild(editButton)
    // list.appendChild(deleteButton)
    return list
}

export default todoList
