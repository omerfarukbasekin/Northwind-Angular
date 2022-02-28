import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { TodoResponseModel } from '../models/todoResponseModel';

@Injectable()
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
    /*       for (let i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].title);
      } */
  }
}
