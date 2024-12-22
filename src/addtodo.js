import { local } from "."
import { saveObject } from "./save"

function addTodo(a, b){
    const project = b
    const card = a

    console.log(card)
    console.log(project)
    const form = document.createElement("form")


    const title = document.createElement("label")
    title.textContent = "To-do Title:"
    title.setAttribute("for","projectTitle")

    const inputTitle = document.createElement("input")
    inputTitle.setAttribute("type","text")
    inputTitle.setAttribute("name","projectTitle")
    inputTitle.setAttribute("id","projectTitle")


    title.appendChild(inputTitle)

    const description = document.createElement("label")
    description.setAttribute("for","projectDescription")
    description.textContent = "To-do Description:"
    
    const inputDescription = document.createElement("input")
    inputDescription.setAttribute("type","text")
    inputDescription.setAttribute("name","projectDescription")
    inputDescription.setAttribute("id","projectDescription")

    description.appendChild(inputDescription)

    const dueDate = document.createElement("label")
    dueDate.setAttribute("for","dueDate")
    dueDate.textContent = "Due Date:"

    const inputDuedate = document.createElement("input")
    inputDuedate.setAttribute("type","datetime-local")
    inputDuedate.setAttribute("name","dueDate")
    inputDuedate.setAttribute("id","dueDate")

    dueDate.appendChild(inputDuedate)

    const piority = document.createElement("label")
    piority.setAttribute("for","piority")
    piority.textContent = "Piority:"

    const inputPiority = document.createElement("select")
    inputPiority.setAttribute("name","piority")
    inputPiority.setAttribute("id","piority")

    const defaultoption = document.createElement("option")
    defaultoption.setAttribute("value","")

    inputPiority.appendChild(defaultoption)

    for (let i = 1; i < 5; i++){
        const option = document.createElement("option")
        option.setAttribute("value", i)
        option.textContent = i
        inputPiority.appendChild(option)
    }

    piority.appendChild(inputPiority)




    const submitButton = document.createElement("button")
    submitButton.setAttribute("type","button")
    submitButton.textContent = "Save"
    submitButton.classList.add("save")
    submitButton.addEventListener("click",()=>{
        project.createTodo(inputTitle.value, inputDescription.value, inputDuedate.value, inputPiority.value)
        saveObject(local)
        card.removeChild(form)
        local.display()
    })




    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(piority)
    form.appendChild(submitButton)

    card.appendChild(form)
}

export {addTodo}