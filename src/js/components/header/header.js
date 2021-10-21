import logo from "./logo";
import tagline from "./tagline";
import link from "./link";
import makeElement from "../../utils/makeElement";

const headerPage = function(params){
    
    const header = document.createElement('header')
    header.classList.add('home-header')
    header.appendChild(makeElement(logo()))
    header.appendChild(makeElement(tagline('The ultimate to do list')))
    header.appendChild(makeElement(link('To Do List App', '/todoPage')))
    
    return header
}

export default headerPage

