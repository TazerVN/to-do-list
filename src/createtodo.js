class toDo{
    constructor(title, description, dueDate, piority, notes, checklist){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.piority = piority;
        this.notes = notes
        this.checklist = checklist
    };

    toJSON(){
        return{
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            piority: this.piority,
            notes: this.notes,
            checklist: this.notes,
            __class__: "todo"
        }
    };

    static fromJSON(data){
        return new toDo(data.title, data.description, data.dueDate, data.piority, data.notes, data.checklist)
    }
}

export {toDo}