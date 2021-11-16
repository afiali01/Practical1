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
    const pageHeader = makeElement(headerTemplate)
    cancelButton.addEventListener('click', onCancelDelete)
    deleteBtn.addEventListener('click',onDeleteToDo)
    pageHeader.querySelector('div').append(cancelButton, deleteBtn)
    page.append(pageHeader)

    return page
}

export default deletePage