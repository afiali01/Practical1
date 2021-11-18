import makeElement from "./../../utils/makeElement"
import button from "./../../components/buttons/button"
import Router from "./../../router/router"
import { getStore } from "./../../redux/store"
import reducer from "./../../redux/reducer"
import styles from "./styles.module.scss"


const cancelButton = button("cancel")
const saveEditButton = button("save")

const editPage = function({title, category, startDate, startTime, endDate, endTime, isCompleted}){
    
    const page = document.createElement('div')
    
    function onCancelEdit(e){
        Router('/todopage')
    }

    function onSaveEdit(e){
        const object = getStore().find((item)=>{
            return(item.title === title)
        })
        console.log(object)

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
        <form class="${styles.edit}" method="post">
            <div>
                <label>
                    Title
                    <input id="title" type="text" value="${title}"/>
                </label>

                <label>
                    Category
                    <input id="category" type="text" value="${category}"/>
                </label>

                <label>
                    Start Date
                    <input  id="startDate" type="text" value="${startDate}"/>
                </label>

                <label>
                    Start Time
                    <input id="startTime" type="text" value="${startTime}"/>
                </label>

                <label>
                    End Date
                    <input id="endDate" type="text" value="${endDate}"/>
                </label>

                <label>
                    End Time
                    <input id="endTime" type="text" value="${endTime}"/>
                </label>

                <label>
                    Complete
                    <input id="completed" type="checkbox" />
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