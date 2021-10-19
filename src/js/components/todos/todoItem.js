import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";
import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import { divide } from "lodash";

//make one 

const todoItem = function(data) {
    var edit = editButton()
    var deleteBtn = deleteButton()
    let item = document.createElement('div')
    item.classList.add('item')
    // var output = `
        
    //         <div class="data">
    //             <li>${data.title}</li>
    //             <li>${data.category}</li>
    //             <li>${data.endDate}</li>
    //             <li>${data.endTime}</li>
    //             <li = class="completed">${data.isComplete}</li>
    //         </div>
        
    // `
    let dataDiv = document.createElement('div')
    dataDiv.classList.add('data')

    let desc = document.createElement('li')
    desc.innerHTML = data.title
    let cat = document.createElement('li')
    cat.innerHTML = data.category
    let date = document.createElement('li')
    date.innerHTML = data.endDate
    let time = document.createElement('li')
    time.innerHTML = data.endTime
    let finished = document.createElement('li')
    finished.innerHTML = data.isComplete

    dataDiv.appendChild(desc)
    dataDiv.appendChild(cat)
    dataDiv.appendChild(date)
    dataDiv.appendChild(time)
    dataDiv.appendChild(finished)
    //buttons
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    buttons.appendChild(editButton())
    buttons.appendChild(deleteButton())

    item.appendChild(dataDiv)
    item.appendChild(buttons)
    
    return item
}

{/* <div class="buttons">
                ${editButton}
                ${deleteButton}
            </div> */}



export default todoItem
