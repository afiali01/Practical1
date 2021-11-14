import makeElement from "../../utils/makeElement"

const button= function(label){
    const template = `<button >${label}</button>`
    const element = makeElement(template);

    return element
}

export default button
