import deleteButton from "./components/buttons/deleteButton"
import button from "./components/buttons/button"
import makeElement from "./utils/makeElement"


const deletePage = function(){
    const page = document.createElement('div')
    const cancelButton = button("cancel")
    const deleteBtn = deleteButton()
    let headerTemplate = 
    `
        <header>
            <h1>Delete To Do</h1>
            <p>Delete to do</p>
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, deleteBtn)
    page.append(pageHeader)

    return page
}

export default deletePage