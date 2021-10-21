import logo from "./logo";
import tagline from "./tagline";
import link from "./link";
import makeElement from "../../utils/makeElement";

const headerPage = function(params){
    const app = document.querySelector('#app')
    app.appendChild(makeElement(logo()))
    app.appendChild(makeElement(tagline('The ultimate to do list')))
    app.appendChild(makeElement(link('To Do List App', '/todoPage')))

    return app
}

export default headerPage

