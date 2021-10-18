import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";

//make one item

const todoItem = async function(id){
    let todoData = await dataFetcher()
    let item = document.createElement('div')
    item.classList.add('todo-data')

    let desc = document.createElement('li')
    desc.textContent = todoData[id].title
    let cat = document.createElement('li')
    cat.textContent = todoData[id].category
    let date = document.createElement('li')
    date.textContent = todoData[id].endDate
    let time = document.createElement('li')
    time.textContent = todoData[id].endTime

    item.appendChild(desc)
    item.appendChild(cat)
    item.appendChild(date)
    item.appendChild(time)

    
    return item

}

export default todoItem
