import { enableEditforCard, disableEditforCard } from "./editablecard"
import { newInstance } from "./masterInstance"
import { addTodo } from "./addtodo"
import { project } from "./createprojects"

const projectList = document.querySelector(".content")


class displayContentCard{
    constructor(project){
        this.title = project.title
        this.description = project.description
        this.todoList = project.todoList
    }

    populateCard(project){
        const card = document.createElement("div")
        card.classList.add("card")
    
        const projectTitle = document.createElement("div")
        projectTitle.textContent = this.title
        projectTitle.classList.add("projecttitle")
    
        projectTitle.addEventListener("selectionchange",()=>{
            enableEditforCard(projectTitle)
        },)
    
        const projectDescription = document.createElement("div")
        projectDescription.textContent = this.description
        projectDescription.classList.add("projectdescription")
    
        const allofTask = document.createElement("div")
        allofTask.classList.add("tasks")

    
        project.todoList.forEach((todo) =>{
            const task = document.createElement("label")
            task.setAttribute("for","todo")
    
            const checkbox = document.createElement("input")
            checkbox.classList.add("checkbox")
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("name", "todo")
            checkbox.setAttribute("id", "todo")
    
            const span = document.createElement("span")
            span.textContent = todo.title
            task.classList.add("task")
    
            span.addEventListener("click",()=>{
                enableEditforCard(span)
            })
            task.appendChild(checkbox)
            task.appendChild(span)
            allofTask.appendChild(task)
        })

        const todoButton = document.createElement("button")
        todoButton.classList.add("card")
        todoButton.textContent = "+"
        todoButton.addEventListener("click",()=>{
            addTodo(card, project)
        })
        allofTask.appendChild(todoButton)

        card.appendChild(projectTitle)
        card.appendChild(projectDescription)
        card.appendChild(allofTask)
        
        projectList.appendChild(card)

    }

    removeCard(){
        projectList.removeChild(card, project)
    }
}
    



export {displayContentCard}