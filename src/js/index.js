import Router from "./router/router"
import dataFetcher from "./utils/dataFetcher"
import keyGenerator from "./utils/key"
import { createStore } from "./redux/store"

const app = document.querySelector('#app')

const onAppInit= async function(){
    //get data
    let data = await dataFetcher()
    
    if(data[0].id ===undefined){
        data = [...keyGenerator(data)]
    }
    createStore(data)
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)

