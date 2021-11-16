import makeElement from "../../utils/makeElement";
import dataFetcher from "../../utils/dataFetcher";
import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";

//make one 

const todoItem = function(data) {
    var edit = editButton()
    var deleteBtn = deleteButton()
    
    //item div
    let item = document.createElement('div')
    item.classList.add('item')
    

    const template = `
        <div class="data" data-key="${data.id}">
                <li>${data.title}</li>
                <li>${data.category}</li>
                <li>${data.endDate}</li>
                <li>${data.endTime}</li>
                <li>${data.isComplete}</li>
        </div>
    `;

    //buttons
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    buttons.appendChild(editButton("edit", "editButton", data.id))
    buttons.appendChild(deleteButton("delete", "deleteButton", data.id))

    
    item.appendChild(makeElement(template))
    item.appendChild(buttons)
    
    return item
}

export default todoItem
