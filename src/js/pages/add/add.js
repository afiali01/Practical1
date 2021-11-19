import Router from "./../../router/router"
import makeElement from "./../../utils/makeElement"
import button from "./../../components/buttons/button"
import addComponent from './../../components/buttons/addButton'
import styles from './styles.module.scss'
import reducer from "../../redux/reducer"

const cancelButton = button("cancel")
const addBtn = addComponent()

const addPage = function(){
    const page = document.createElement('div')
    
    function onCancelAdd(e){
        Router('/todopage')
    }

    function onAddTodo(e){
        const newTodo = {
            title: document.getElementById('title').value,
            category: document.getElementById('category').value,
            startDate: document.getElementById('startDate').value,
            startTime: document.getElementById('startTime').value,
            endDate: document.getElementById('endDate').value,
            endTime: document.getElementById('endTime').value,
            isComplete: (document.getElementById('completed').checked ? true : false)
        }
        console.log(newTodo)
        const action = {
            type: "add",
            payload: {newTodo},
            cb:()=>Router('/todopage')
        }

        reducer(action)
        
    }



    let addHeader = `
        <header class="${styles.addHeader}">
            <h1>Add Todo</h1>
        </header>
    `

    let addTemplate = 
    `
        <form class="${styles.add}" method="post" action="">
            <div>

                <div>
                    <label>Title</label>
                    <input id="title" type="text"/>
                </div>

                <div>
                    <label>Category</label>
                    <input id="category" type="text" />
                </div>

                <div>
                    <label>Start Date</label>
                    <input  id="startDate" type="text" />
                </div>

                <div>
                    <label>Start Time </label>
                    <input id="startTime" type="text" />
                </div>

                <div>
                    <label>End Date</label>
                    <input id="endDate" type="text" />
                </div>

                <div>
                    <label>End Time</label>
                    <input id="endTime" type="text" />
                </div>

                <div>
                    <label>Complete</label>
                    <input id="completed" type="checkbox"/>
                </div>
            </div>
            <div id="button"></div>
        </form>
    `

    const addTop = makeElement(addHeader)
    const addForm = makeElement(addTemplate)
    cancelButton.addEventListener('click', onCancelAdd)
    addBtn.addEventListener('click', onAddTodo)
    addForm.querySelector('#button').append(cancelButton, addBtn)
    page.append(addTop)
    page.append(addForm)

    return page
}

export default addPage