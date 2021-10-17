import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";

//make one item

const todoItem = function(id){
    let todoData = dataFetcher()
    console.log(todoData)
    let item = document.createElement('div')
    item.classList.add('todo-data')
    var output = 
    `
        <li>${todoData[id]}</li>
    `
    item.innerHTML = output
    
    return item

}

{/* <li>${todoData[0].title}</li>
<li>${todoData[0].endDate}</li>
<li>${todoData[0].endTime}</li> */}

export default todoItem
