import makeElement from "./../../utils/makeElement"
import button from "./../../components/buttons/button"
import Router from "./../../router/router"
import { getStore } from "./../../redux/store"
import reducer from "./../../redux/reducer"
import styles from "./styles.module.scss"


const cancelButton = button("cancel")
const saveEditButton = button("save")

const editPage = function({id, title, category, startDate, startTime, endDate, endTime, isComplete}){
    
    const page = document.createElement('div')
    function onCancelEdit(e){
        Router('/todopage')
    }

    function onSaveEdit(e){
        const data = getStore()
        const object = data.find(item => item.id === id)
        console.log(object)

        const action = {
            type:"edit",
            payload:{object},
            cb:()=> Router('/todopage')
        }

        reducer(action)
    }

    let editHeader = `
        <header class="${styles.editHeader}">
            <h1>Edit Todo</h1>
        </header>
    `
    let editTemplate = 
    `
        <form class="${styles.edit}" method="post">
            <div>

                <div>
                    <label>Title</label>
                    <input id="title" type="text" value="${title}"/>
                </div>

                <div>
                    <label>Category</label>
                    <input id="category" type="text" value="${category}"/>
                </div>

                <div>
                    <label>Start Date</label>
                    <input  id="startDate" type="text" value="${startDate}"/>
                </div>

                <div>
                    <label>Start Time </label>
                    <input id="startTime" type="text" value="${startTime}"/>
                </div>

                <div>
                    <label>End Date</label>
                    <input id="endDate" type="text" value="${endDate}"/>
                </div>

                <div>
                    <label>End Time</label>
                    <input id="endTime" type="text" value="${endTime}"/>
                </div>

                <div>
                    <label>Complete</label>
                    <input id="completed" type="checkbox"/>
                </div>
            </div>
            <div id="button"></div>
        </form>
    `
    const editTop = makeElement(editHeader)
    const editForm = makeElement(editTemplate)
    editForm.querySelector('#completed').checked = isComplete
    

    cancelButton.addEventListener('click', onCancelEdit)
    saveEditButton.addEventListener('click',onSaveEdit)
    editForm.querySelector('#button').append(cancelButton, saveEditButton)
    page.append(editTop)
    page.append(editForm)


    return page
}

export default editPage