export class Model{
    user;
    items;

    constructor(){
        this.user = "Mert";
        this.items = [
            new ToDoItem("Spor", true),
            new ToDoItem("Kahvalti", true),
            new ToDoItem("Kitap", true),
            new ToDoItem("Sinema", false)
          ];
    }
}

export class ToDoItem{
    description;
    action;

    constructor(description:string, action:boolean){
        this.description = description;
        this.action = action;
    }
}