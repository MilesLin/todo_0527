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

  add(value: string){
    var obj = {
      todo : value
    };
    this.todos.push(obj);
    console.log(this.todos);
  }
}
