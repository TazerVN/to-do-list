
import "./styles.css"
import { compareAsc, format } from "date-fns";
import { project } from "./createprojects";
import { newInstance } from "./masterInstance";
import { displayContentCard } from "./displaycontent";
import { displaySidebar } from "./displaysidebar";
import { addTaskButton } from "./addTaskButton";
import { saveObject, restoreObject } from "./save";
import stringify from "fast-json-stable-stringify";



if(!localStorage.getItem("local")){
    const newLocal = new newInstance("local")
    saveObject(newLocal)
    console.log(newLocal)
}



const save = JSON.parse(localStorage.getItem("local"));
let local;
if (save.__class__ === "Instance"){
    local = newInstance.fromJSON(save);
}

console.log(local)
local.display()

export {local}