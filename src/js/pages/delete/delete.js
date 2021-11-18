import deleteButton from "./../../components/buttons/deleteButton"
import button from "./../../components/buttons/button"
import makeElement from "./../../utils/makeElement"
import Router from "./../../router/router"
import reducer from "./../../router/router"
import { getStore } from "./../../redux/store"
import styles from "./styles.module.scss"

const cancelButton = button("cancel")
const deleteBtn = deleteButton()

const deletePage = function(props){
    console.log(props)
    const page = document.createElement('div')
    const data = getStore()
    const item = data.find(todo => todo.id === props.id)
    function onCancelDelete(e){
        Router('/todopage')
    }

    function onDeleteToDo(e){
        const index = getStore().findIndex((item)=>{
            return(item.id === props.id)
        })
        console.log(index)

        const action = {
            type:"delete",
            payload:{index},
            cb:()=> Router('/todopage')
        }

        reducer(action)
    }
    
    let headerTemplate = 
    `
        <header class="${styles.delete}">
            <h1>Delete To Do</h1>
            <div></div>
        </header>
    `

    let itemTemplate = 
    `
        <div class="${styles.data}" data-key="${item.id}">
            <li>${item.title}</li>
            <li>${item.category}</li>
            <li>${item.endDate}</li>
            <li>${item.endTime}</li>
            <li>${(item.isComplete == true ? "Complete": "Not Completed")}</li>
        </div>
    `
    const pageHeader = makeElement(headerTemplate)
    const itemDisplay = makeElement(itemTemplate)
    cancelButton.addEventListener('click', onCancelDelete)
    deleteBtn.addEventListener('click',onDeleteToDo)
    pageHeader.querySelector('div').append(cancelButton, deleteBtn)
    page.append(pageHeader)
    page.append(itemDisplay)

    if(item.isComplete === true){
        itemDisplay.querySelectorAll('li')[4].classList.add('completed')
    }
    else{
        itemDisplay.querySelectorAll('li')[4].classList.add('not-completed')
    }
    return page
}

export default deletePage