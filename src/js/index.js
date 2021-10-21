import homePage from "./home"
import todoPage from "./todoPage"
import Router from "./router/router"

const app = document.querySelector('#app')
Router(window.location.pathname)

const onAppInit = async function(e){

}

window.addEventListener('load', onAppInit)

