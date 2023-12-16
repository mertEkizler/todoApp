import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName(){
    return this.model.user;
  }

  getItems(){
    return this.model.items.filter(i=> !i.action);
  }

  addItem(value:string){
    if(value != ""){
      this.model.items.push(new ToDoItem(value,false));
    }
  }
}