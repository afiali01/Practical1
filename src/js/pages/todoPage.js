import logo from "./../components/header/logo"
import tagline from "./../components/header/tagline"
import makeElement from "./../utils/makeElement"
import todoList from "./../components/todos/todoList"
import appBar from "./../components/todos/appBar"



const todoPage = function(){
    const app = document.createElement('div')

    //header
    const todoHeaderDiv = document.createElement('div')
    todoHeaderDiv.classList.add('todo-header')
    todoHeaderDiv.appendChild(makeElement(logo()))
    todoHeaderDiv.appendChild(makeElement(tagline('The ultimate to do list')))

    //todo list
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-list')
    const list = todoList()
    todoDiv.appendChild(list)
    // app bar
    const appBarComponent = appBar() 

    app.appendChild(todoHeaderDiv)
    app.appendChild(todoDiv)
    app.appendChild(appBarComponent)

    return app
}

export default todoPage