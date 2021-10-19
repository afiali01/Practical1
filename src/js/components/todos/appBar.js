import addComponent from "../buttons/button"

const  appBar = function(){
    const div = document.createElement('div')
    div.classList.add('appBar')
    const button = addComponent()
    div.appendChild(button)

    return div
}

export default appBar