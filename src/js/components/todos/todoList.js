import makeElement from "../../utils/makeElement";
import todoItem from "./todoItem";
import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import dataFetcher from "../../utils/dataFetcher";
import keyGenerator from "../../utils/key";
import { createStore, getStore } from "../../redux/store";

const todoList = function(){
    //list div
    const list = document.createElement('div')
    list.classList.add('list-items')
    const data = getStore()
    

    //append child into list
    for(let i=0; i<data.length;i++){
        list.appendChild(todoItem(data[i]))
    }
    // if(data !== null){
    //     const elements = data.map(elm => todoItem(elm))
    //     elements.forEach(element => {
    //         list.append(element)
    //     });
    // }

    return list
}

export default todoList
