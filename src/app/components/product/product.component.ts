import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [TodoService],
})
export class ProductComponent implements OnInit {
  todos: Todo[] = [];
  dataLoaded = false;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
      this.delay(3000).then((any) => {
        this.dataLoaded = true;
      });
    });
  }
  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => console.log('fired')
    );
  }
}
