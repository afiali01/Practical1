import makeElement from "./../../utils/makeElement";
import todoItem from "./todoItem";
import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import dataFetcher from "../../utils/dataFetcher";
import keyGenerator from "../../utils/key";
import { createStore, getStore } from "../../redux/store";
import Router from "../../router/router";

const todoList = function(){
    //list div
    const list = document.createElement('div')
    list.classList.add('list-items')
    const data = getStore()
    function onDeleteToDo (e){
        const todoID = {id:e.currentTarget.dataset.key}

        Router('/deletepage', todoID)
    }

    function onEditTodo(e){
        const id = e.currentTarget.dataset.key
        const todoObject = data.find(todo => todo.id === id)
        
        Router('/editpage', todoObject)
    }
    
    
    if(data !== null){
        const elements = data.map(elm => todoItem(elm))
        elements.forEach(element => {
            element.querySelector('#deleteButton').addEventListener('click', onDeleteToDo)
            element.querySelector('#editButton').addEventListener('click', onEditTodo)
            list.append(element)
        });
    }
    

    return list
}

export default todoList
