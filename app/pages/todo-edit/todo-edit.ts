import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TodoService} from '../../providers/todo-service/todo-service';
import {Todo} from '../../todo.ts';

/*
  Generated class for the TodoEditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/todo-edit/todo-edit.html',
  providers: [TodoService]
})
export class TodoEditPage {
  public todo: Todo;    // The todo itself
  public todos: Todo[]; // The list of todos from the main page
  public index: number; // The index of the todo we're looking at

  constructor(public todoService: TodoService, public nav: NavController, public navParams: NavParams ) {
    this.todo = navParams.get('todo');
    this.todos = navParams.get('todos');
    this.index = navParams.get('index');
  }

  saveTodo(updatedDescription: string) {
    this.todo.description = updatedDescription;
    this.todoService.update(this.todo)
        .subscribe(response => {
          this.nav.pop(); // go back to todo list
        });
  }

  deleteTodo() {
    this.todoService.delete(this.todo)
      .subscribe(response => {
        this.todos.splice(this.index, 1); // remove the todo
        this.nav.pop(); //go back to todo list
      });
  }
}
