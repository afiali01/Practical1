import {editButton, deleteButton} from "../buttons/button"



const todoItem = function(data){
    
    for(i=0; i < length(data); i++){
        const template = `
        <div class = "todoItem">
            <div class = "item-data">
                <h3>${data.category}</h3>
                <p>${data.title}</p>
                <p>${data.endDate}</p>
                <p>${data.endTime}</p>
            </div>
            <div class = "buttons">
                ${editButton}
                ${deleteButton}
            </div>
        </div>
        `
    }

    document.body.innerHTML = template
}

export default todoItem