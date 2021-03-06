import { Injectable , Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Todo } from '../../todo.ts';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {
  // class attributes
  todosUrl = "/api/todos"

  constructor(public http: Http, @Inject('APP_CONFIG') appConfig: any) {
    this.todosUrl = appConfig.apiEndpoint + this.todosUrl;
  }

  // Get all todos
  load(): Observable<Todo[]> {
    return this.http.get(this.todosUrl)
               .map(res => res.json())
               .catch(this.handleError);
  }

  // Add a todo-edit
  add(todo: string): Observable<Todo> {
    let body = JSON.stringify({description: todo});
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl, body, {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  // Update a todo
  update(todo: Todo) {
    let url = `${this.todosUrl}/${todo._id}`; //see mdn.io/templateliterals
    let body = JSON.stringify(todo)
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.put(url, body, {headers: headers})
                    .map(() => todo) //See mdn.io/arrowfunctions
                    .catch(this.handleError);
  }

  // Delete a todo
  delete(todo: Todo) {
    let url = `${this.todosUrl}/${todo._id}`;
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.delete(url, headers)
               .catch(this.handleError);
  }


  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
