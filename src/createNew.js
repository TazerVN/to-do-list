import { project } from "./createprojects"
import { local } from "."
import { saveObject } from "./save"

function createNewProject(title,description){
    const newproject = new project(title,description)
    local.addProject(newproject)
    local.display()
    saveObject(local)

    function newTodo(title, description, dueDate, piority, notes, checklist){
        const todo = newproject.createTodo(title, description, dueDate, piority, notes, checklist)
        return todo
    }

}



export {createNewProject}