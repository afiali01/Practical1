import logo from "./components/header/logo"
import tagline from "./components/header/tagline"
import makeElement from "./utils/makeElement"
import todoList from "./components/todos/todoList"
import appBar from "./components/todos/appBar"

const app = document.querySelector('#app')

const todoPage= function(){
    const page = combineHeadBody()
    return page
}

const todoHeader = function(params){
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-header')
    todoDiv.appendChild(makeElement(logo()))
    todoDiv.appendChild(makeElement(tagline('The ultimate to do list')))
    // app.appendChild(todoDiv)
    return todoDiv
}

const todos = function(params){
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-list')
    todoDiv.appendChild(todoList())
    // app.appendChild(todoDiv)
    return todoDiv
}

const combineHeadBody = function(){
    const toDosHeader = todoHeader()
    const todosBody = todos()
    const appBarComponent = appBar() 
    const app = document.querySelector('#app')
    app.appendChild(toDosHeader)
    app.appendChild(todosBody)
    app.appendChild(appBarComponent)
    return app
}

export default todoPage