const projectsSidebar = document.querySelector(".projectlist")

class displaySidebar{
    constructor(project){
        this.title = project.title
        this.description = project.description
        this.todoList = project.todoList
    }

    

    populateSidebar(project){
        const projectli = document.createElement("li")
        projectli.classList.add("project")

        const projectTitle = document.createElement("div")
        projectTitle.classList.add("projectTitle")
        projectTitle.textContent = this.title;
        projectTitle.addEventListener("click", ()=>{
            
        })

        const todoList = document.createElement("ul")

        project.todoList.forEach((todo) => {
            const todoTitle = document.createElement("li")
            todoTitle.classList.add("project")
            todoTitle.textContent = todo.title
            todoList.appendChild(todoTitle)
        });


        projectli.appendChild(projectTitle)
        projectli.appendChild(todoList)
        projectsSidebar.appendChild(projectli)


    }

    removeSidebar(){
        projectsSidebar.removeChild(project)
    }
    
}

export {displaySidebar}