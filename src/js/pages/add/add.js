import Router from "./../../router/router"
import makeElement from "./../../utils/makeElement"
import button from "./../../components/buttons/button"
import addComponent from './../../components/buttons/addButton'
import styles from './styles.module.scss'

const cancelButton = button("cancel")
const addBtn = addComponent()

const addPage = function(){
    const page = document.createElement('div')
    
    function onCancelAdd(e){
        Router('/todopage')
    }

    function onAddTodo(e){

    }



    let addHeader = `
        <header class="${styles.addHeader}">
            <h1>Add Todo</h1>
        </header>
    `

    let addTemplate = 
    `
        <form class="${styles.add}">
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

    const addTop = makeElement(addHeader)
    const addForm = makeElement(addTemplate)
    cancelButton.addEventListener('click', onCancelAdd)
    addBtn.addEventListener('click', onAddTodo)
    addForm.querySelectorAll('div')[1].append(cancelButton, addBtn)
    page.append(addTop)
    page.append(addForm)

    return page
}

export default addPage