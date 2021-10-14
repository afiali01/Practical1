import makeElement from "../../utils/makeElement";
import todoItem from "./todoItem";

const todoList = function(){
    const list = document.createElement('div')
    list.classList.add('todo-list')
    list.appendChild(makeElement(todoItem()))
    
    return list
}

export default todoList

// let dataStore;

//     fetch('https://raw.githubusercontent.com/afiali01/Practical1/main/todos.json')
//     .then(res => res.json())
//     .then(data => {
//         dataStore = [...data]
//     })
//     .catch(err => console.log(err))
//     console.log(dataStore)