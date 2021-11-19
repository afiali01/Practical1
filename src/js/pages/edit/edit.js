import makeElement from "./../../utils/makeElement"
import button from "./../../components/buttons/button"
import Router from "./../../router/router"
import { getStore } from "./../../redux/store"
import reducer from "./../../redux/reducer"
import styles from "./styles.module.scss"


const cancelButton = button("cancel")
const saveEditButton = button("save")

const editPage = function(props){
    const page = document.createElement('div')

    function onCancelEdit(e){
        Router('/todopage')
    }

    function onSaveEdit(e){
        const data = getStore()
        const object = data.find(x => x.id === props.id)
        const index = getStore().findIndex((item)=>{
            return(item.id === props.id)
        })
        
        object.title = document.getElementById('title').value
        object.category = document.getElementById('category').value
        object.startDate = document.getElementById('startDate').value
        object.startTime = document.getElementById('startTime').value
        object.endDate = document.getElementById('endDate').value
        object.endTime = document.getElementById('endTime').value
        if(document.getElementById('completed').checked){
            object.isComplete = true
        }
        else{
            object.isComplete = false
        }

        const action = {
            type:"edit",
            payload: {object, index},
            cb:() => Router('/todopage')
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
        <form class="${styles.edit}" method="get" action="">
            <div>

                <div>
                    <label>Title</label>
                    <input id="title" type="text" value="${props.title}"/>
                </div>

                <div>
                    <label>Category</label>
                    <input id="category" type="text" value="${props.category}"/>
                </div>

                <div>
                    <label>Start Date</label>
                    <input  id="startDate" type="text" value="${props.startDate}"/>
                </div>

                <div>
                    <label>Start Time </label>
                    <input id="startTime" type="text" value="${props.startTime}"/>
                </div>

                <div>
                    <label>End Date</label>
                    <input id="endDate" type="text" value="${props.endDate}"/>
                </div>

                <div>
                    <label>End Time</label>
                    <input id="endTime" type="text" value="${props.endTime}"/>
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
    editForm.querySelector('#completed').checked = props.isComplete
    
    cancelButton.addEventListener('click', onCancelEdit)
    saveEditButton.addEventListener('click',onSaveEdit)
    editForm.querySelector('#button').append(cancelButton, saveEditButton)
    page.append(editTop)
    page.append(editForm)


    return page
}

export default editPage