import homePage from "../home";
import todoPage from "../todoPage";
import notFound from "../notFound";

const routes = {
    "/": homePage,
    "/todoPage": todoPage
}

const Router =  function (pathname)   {
    const isValidRoute = Object.keys(routes).find(key => key===pathname)
    
     // check the pathname agains the router object
     // if path is valid display the component page
     // if not display the not found page.

    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    

        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined){
            app.appendChild(notFound())
        }
        else{
            app.append(routes[window.location.pathname]())
            //app.append(routes[isValidRoute]())
        }
}

export default Router