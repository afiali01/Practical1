import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";
import { intersection } from "lodash";

//make one 
var todoData
const getData = async () => {
    todoData = await dataFetcher()
}


const todoItem = (id) =>{
    let item = document.createElement('div')
    item.classList.add('todo-data')
    
    let desc = document.createElement('li')
    desc.classList.add('title')
    desc.innerHTML = todoData[id].title
    item.appendChild(desc)

    // let cat = document.createElement('li')
    // cat.classList.add('category')
    // cat.innerHTML = todoData[id].category
    // item.appendChild(cat)

    // let date = document.createElement('li')
    // date.classList.add('end-date')
    // date.innerHTML = todoData[id].endDate
    // item.appendChild(date)

    // let time = document.createElement('li')
    // time.classList.add('end-time')
    // time.innerHTML = todoData[id].endTime
    // item.appendChild(time)

    
    return item

}

export default todoItem
