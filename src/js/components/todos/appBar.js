import Router from "../../router/router"
import addComponent from "../buttons/addButton"

const  appBar = function(){
    function onAddTodo(e){
        Router('/addpage')
    }
    const div = document.createElement('div')
    div.classList.add('appBar')
    const button = addComponent()
    button.addEventListener('click', onAddTodo)
    div.appendChild(button)

    return div
}

export default appBar