import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {Todo} from './todo';
import {environment} from '../../environments/environment';

@Injectable()
export class TodoListService {
  readonly todoUrl: string = environment.API_URL + 'todos';

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todoUrl);
  }

  getTodoById(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(this.todoUrl + '/' + id);
  }

  getTodoByComplete(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todoUrl + '?status=complete');
  }

  getTodoByIncomplete(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todoUrl + '?status=incomplete');
  }

}
