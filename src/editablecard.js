var toggleBool = false

function toggle(){
    if (toggleBool == false){
        toggleBool = true
    }
    else{
        toggleBool = false
    }
}


function enableEditforCard(card){
    if(toggleBool == false){
    toggle()
    card.setAttribute("spellcheck", "false")
    card.setAttribute("data-gramm", "false")
    card.setAttribute("data-gramm_editor", "false")
    card.setAttribute("data-enable-grammarly", "false")
    card.scrollIntoView({behaviour: "smooth", block:"center"})
    card.setAttribute("contenteditable","true")
    }

    else{
    toggle()
    card.setAttribute("contenteditable","false")
    }
}

function disableEditforCard(card){
    card.setAttribute("contenteditable","false")
}

export {enableEditforCard, disableEditforCard}