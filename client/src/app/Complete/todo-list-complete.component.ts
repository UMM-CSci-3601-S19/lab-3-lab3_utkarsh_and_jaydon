import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../todos/todo-list.service';
import {Todo} from '../todos/todo';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: 'todo-list-ByStatusC.component.html',
  styleUrls: ['../todos/todo-list.component.css'],
  providers: []
})

export class TodoCompleteListComponent implements OnInit {
  // These are public so that tests can reference them (.spec.ts)
  public todosC: Todo[];
  public filteredTodos: Todo[];

  public todoOwner: string;
  public todoBody: string;
  public todoCategory: string;


  // Inject the TodoListService into this component.
  // That's what happens in the following constructor.
  //
  // We can call upon the service for interacting
  // with the server.

  constructor(private todoListService: TodoListService) {

  }
  // searchCategory: string for when we want to add searching by category
  public filterCTodos(searchOwner: string, searchBody: string, searchCategory: string): Todo[] {

    this.filteredTodos = this.todosC;

    // Filter by owner
    if (searchOwner != null) {
      searchOwner = searchOwner.toLocaleLowerCase();

      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchOwner || todo.owner.toLowerCase().indexOf(searchOwner) !== -1;
      });
    }


    //Filter by body
    if(searchBody != null) {
      searchBody = searchBody.toLocaleLowerCase();
      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchBody || todo.body.toLowerCase().indexOf(searchBody) !== -1;
      });
    }

    //Filter by category
    if(searchCategory != null) {
      searchCategory = searchCategory.toLocaleLowerCase();
      this.filteredTodos = this.filteredTodos.filter(todo => {
        return !searchCategory || todo.category.toLowerCase().indexOf(searchCategory) !== -1;
      })
    }

    return this.filteredTodos;
  }

  /**
   * Starts an asynchronous operation to update the todos list
   *
   */
  refreshTodos(): Observable<Todo[]> {
    // Get Todos returns an Observable, basically a "promise" that
    // we will get the data from the server.
    //
    // Subscribe waits until the data is fully downloaded, then
    // performs an action on it (the first lambda)

    const todos: Observable<Todo[]> = this.todoListService.getTodoByComplete();
    todos.subscribe(
      returnedTodos => {
        this.todosC = returnedTodos;
        this.filterCTodos(this.todoOwner, this.todoBody, this.todoCategory);
      },
      err => {
        console.log(err);
      });

    return todos;
  }




  ngOnInit(): void {
    this.refreshTodos();
  }
}
