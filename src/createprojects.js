import { toDo } from "./createtodo";
import { displayContentCard } from "./displaycontent";
import { displaySidebar } from "./displaysidebar";

class project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.todoList = [];
        this.contentcard = new displayContentCard(this)
        this.sidebar = new displaySidebar(this)
    }

    createTodo(title, description, dueDate, piority, notes, checklist){
        const newTodo = new toDo(title, description, dueDate, piority, notes, checklist)
        this.todoList.push(newTodo)
    }

    removeTodo(index){
        this.todoList.splice(index,1)
    }

    set projectTitle(title){
        this.title = title
    }

    set projectDescription(description){
        this.description = description
    }

    populateContent(){
        this.contentcard.populateCard(this)
        this.sidebar.populateSidebar(this)
    }

    removeContent(){
        this.contentcard.removeCard(this)
        this.sidebar.removeSidebar(this)
    }

    toJSON(){
        return {
            title: this.title,
            description: this.description,
            todoList: this.todoList.map(td => td.toJSON()),
            __class__: "project"
            
        }
    }

    static fromJSON(data){
        const p = new project(data.title, data.description)
        p.todoList = data.todoList.map(todoData => toDo.fromJSON(todoData))
        console.log(p)
        return p
        
    }

}




export {project}