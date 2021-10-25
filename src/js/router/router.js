import homePage from "../home";
import todoPage from "../todoPage";
import notFound from "../notFound";

const routes = {
    "/": homePage,
    "/todoPage": todoPage
}

const Router = function(pathname){
    const isValidRoute = Object.keys(routes).find(key => key===pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    

    if(isValidRoute === undefined){
        app.appendChild(notFound())
    }
    else{
        // app.appendChild(routes[window.location.pathname](pathname))
        app.appendChild(routes[isValidRoute]())
    }
}

export default Router