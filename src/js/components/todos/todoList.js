import makeElement from "../../utils/makeElement";
import todoItem from "./todoItem";



// const getData = async() =>{
//     const res = await fetch(`../../data/todos.json`);
//     const data = await res.json(); 
//     return data;
// }

// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err));

fetch('../../data/todos.json')
.then(res => res.json())
.then(data => console.log(JSON.stringify(data)))
.catch(err => console.log(err))



const todoList = function(data){
    const list = document.createElement('div')
    list.classList.add('todo-list')
    list.appendChild(makeElement(todoItem(data)))
    // list.appendChild(makeElement(todoItem(data)))
    // list.appendChild(makeElement(todoItem(data)))
    // list.appendChild(makeElement(todoItem(data)))
    // list.appendChild(makeElement(todoItem(data)))
    
    return list
}

export default todoList