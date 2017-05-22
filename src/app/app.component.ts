import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todo: string;
  todos: any[] = [];

  add(value: string) {
    var obj = {
      todo: value,
      isCompleted: false
    };
    this.todos.push(obj);
    console.log(this.todos);
  }

  delete(todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  clearCompleted(){
    this.todos = this.todos.filter(x => !x.isCompleted);
  }

  getItemLeft(){

    var isNotCompletedTodos = this.todos.filter(x => !x.isCompleted);

    return isNotCompletedTodos.length;
  }
}
