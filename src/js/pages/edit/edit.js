import makeElement from "./../../utils/makeElement"
import button from "./../../components/buttons/button"
import Router from "./../../router/router"
import { getStore } from "./../../redux/store"
import reducer from "./../../redux/reducer"
import styles from "./styles.module.scss"


const cancelButton = button("cancel")
const saveEditButton = button("save")

const editPage = function(todoData){
console.log(todoData)
    const page = document.createElement('div')

    function onCancelEdit(e){
        Router('/todopage')
    }

    function onSaveEdit(e){
        // const index = getStore().findIndex((item)=>{
        //     return(item.id === props.id)
        // })
        // console.log(index)

        // const action = {
        //     type:"edit",
        //     payload:{index},
        //     cb:()=> Router('/todopage')
        // }

        // reducer(action)
    }

    let editHeader = `
        <header class="${styles.editHeader}">
            <h1>Edit Todo</h1>
        </header>
    `
    let editTemplate = 
    `
        <form class="${styles.edit}">
            <div>
                <label>
                    Title
                    <input type="text"/>
                </label>

                <label>
                    Category
                    <input type="text"/>
                </label>

                <label>
                    Start Date
                    <input type="date"/>
                </label>

                <label>
                    Start Time
                    <input type="text"/>
                </label>

                <label>
                    End Date
                    <input type="date"/>
                </label>

                <label>
                    End Time
                    <input type="text"/>
                </label>

                <label>
                    Complete
                    <input type="checkbox"/>
                </label>
            </div>
            <div id="button"></div>
        </form>
    `
    const editTop = makeElement(editHeader)
    const editForm = makeElement(editTemplate)
    cancelButton.addEventListener('click', onCancelEdit)
    saveEditButton.addEventListener('click',onSaveEdit)
    editForm.querySelectorAll('div')[1].append(cancelButton, saveEditButton)
    page.append(editTop)
    page.append(editForm)

    return page
}

export default editPage