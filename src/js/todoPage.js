import logo from "./components/header/logo"
import tagline from "./components/header/tagline"
import makeElement from "./utils/makeElement"
import todoList from "./components/todos/todoList"

const todoPage= function(){
    const todoListPage = todoHeader()
    return todoListPage
}

const todoHeader = function(params){
    const app = document.querySelector('#app')
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-header')
    todoDiv.appendChild(makeElement(logo()))
    todoDiv.appendChild(makeElement(tagline('The ultimate to do list')))
    app.appendChild(todoDiv)
    return app
}

const todos = function(params){
    const app = document.querySelector('#app')
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-list')
    app.appendChild(todoDiv)
    return app
}

export default todoPage