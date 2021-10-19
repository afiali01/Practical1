import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";

//make one 
const getData = async function(id){
    let todoData = await dataFetcher()
    return todoData[id]
}

const todoItem = function(id) {
    
    let item = document.createElement('div')
    item.classList.add('todo-data')
    
    let desc = document.createElement('li');
    desc.classList.add('title');
    desc.innerHTML = "Finish homework"
    item.appendChild(desc)

    let cat = document.createElement('li')
    cat.classList.add('category')
    cat.innerHTML = "School"
    item.appendChild(cat)

    let date = document.createElement('li')
    date.classList.add('end-date')
    date.innerHTML = "Wednesday October 14"
    item.appendChild(date)

    let time = document.createElement('li')
    time.classList.add('end-time')
    time.innerHTML = "6:00pm"
    item.appendChild(time)

    let completed = document.createElement('li')
    completed.classList.add('completed')
    completed.innerHTML = "Completed"
    item.appendChild(completed)

    return item
}

    


export default todoItem
