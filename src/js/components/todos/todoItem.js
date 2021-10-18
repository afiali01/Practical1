import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";

//make one item

const todoItem = async function(id){
    let todoData = await dataFetcher()
    let item = document.createElement('div')
    item.classList.add('todo-data')

    let title = document.createElement('li')
    title.textContent = todoData[id]
    let category = document.createElement('li')
    category.textContent = todoData[id]
    let endDate = document.createElement('li')
    endDate.textContent = todoData[id]
    let endTime = document.createElement('li')
    endTime.textContent = todoData[id]

    item.appendChild(title)
    item.appendChild(category)
    item.appendChild(endDate)
    item.appendChild(endTime)

    
    return item

}

{/* <li>${todoData[0].title}</li>
<li>${todoData[0].endDate}</li>
<li>${todoData[0].endTime}</li> */}

export default todoItem
