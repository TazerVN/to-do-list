import { createNewProject} from "./createNew"

const content = document.querySelector(".content")


function addTask(){

    const card = document.createElement("div")
    card.classList.add("card", "form")

    const form = document.createElement("form")


    const title = document.createElement("label")
    title.textContent = "Project Title"
    title.setAttribute("for","projectTitle")

    const inputTitle = document.createElement("input")
    inputTitle.setAttribute("type","text")
    inputTitle.setAttribute("name","projectTitle")
    inputTitle.setAttribute("id","projectTitle")


    title.appendChild(inputTitle)

    const description = document.createElement("label")
    description.setAttribute("for","projectDescription")
    description.textContent = "Project Description"
    
    const inputDescription = document.createElement("input")
    inputDescription.setAttribute("type","text")
    inputDescription.setAttribute("name","projectDescription")
    inputDescription.setAttribute("id","projectDescription")

    const submitButton = document.createElement("button")
    submitButton.textContent = "Save"
    submitButton.addEventListener("click",()=>{
        createNewProject(inputTitle.value, inputDescription.value)
    })


    description.appendChild(inputDescription)

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(submitButton)

    card.appendChild(form)
    content.appendChild(card)

}

export {addTask}