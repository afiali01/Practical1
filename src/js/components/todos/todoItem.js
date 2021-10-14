import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";



const todoItem = function(data){
    const template = `
        <div class = "todoItem">
            <div class = "item-data">
                <h3>school</h3>
                <p>Finish homework</p>
                <p>THursday, Oct 14</p>
                <p>6:00pm</p>
            </div> 
            <div class = "buttons">` + 
                editButton() + deleteButton()+
            `</div>
        </div>
        `
    document.body.innerHTML = template
    return template
}

export default todoItem