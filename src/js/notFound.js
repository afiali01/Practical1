import link from "./components/header/link"
import makeElement from "./utils/makeElement"

const notFound = function(){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="warning center-in-page">
            <h1><span>404</span> <span>page not found</span></h1>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const homeLink = link("To Do List App", "/todoPage")

    pageHeader.append(makeElement(homeLink))
    page.append(pageHeader)

    return page
}

export default notFound