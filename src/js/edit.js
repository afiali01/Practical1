import makeElement from "./utils/makeElement"
import button from "./components/buttons/button"
import Router from "./router/router"
import { getStore } from "./redux/store"
import reducer from "./redux/reducer"


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
        <header>
            <h1>Edit Todo</h1>
        </header>
    `
    let editTemplate = 
    `
        <form>
            <div>
                <label>
                    Title
                    <input type="text"/>
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