import { displayContentCard } from "./displaycontent"
import { displaySidebar } from "./displaysidebar"
import { addTaskButton } from "./addTaskButton"
import { saveObject } from "./save"
import { project } from "./createprojects"

const content = document.querySelector(".content")
const sidebar = document.querySelector(".projectlist")

class newInstance{
    constructor(name){
        this.name = name
        this.projectList = []
    }

    addProject(project){
        this.projectList.push(project)
        saveObject(this)
    }

    display(){
        const instanceTitle = document.createElement("div")
        instanceTitle.classList.add("title")
        instanceTitle.textContent = this.name
        
        
        while (content.firstChild){
            content.removeChild(content.firstChild)
        }

        while (sidebar.firstChild){
            sidebar.removeChild(sidebar.firstChild)
        }
        

        content.appendChild(instanceTitle)

        this.projectList.forEach((project)=>{
            project.populateContent()
            console.log(project)
        })
        
        addTaskButton()
    }

    toJSON(){
        return {
            name: this.name,
            projectList: this.projectList.map(p => p.toJSON()),
            __class__: "Instance",
        };
    }

    static fromJSON(data){
        const Instance = new newInstance(data.name);
        Instance.projectList = data.projectList.map(projectData => project.fromJSON(projectData))
        return Instance
    }

}

export {newInstance}