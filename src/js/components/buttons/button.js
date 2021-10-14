import makeElement from "../../utils/makeElement"

const addComponent= function(label, className = 'addButton'){
    const template = `<button class="${className}">${label}</button>`
    const element = makeElement(template);

    return element
}

export default addComponent
