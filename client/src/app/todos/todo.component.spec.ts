import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Todo} from './todo';
import {TodoComponent} from './todo.component';
import {TodoListService} from './todo-list.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('Todo component', () =>{
  let todoComponent:TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  let todoListServiceStub: {
    getTodoById: (todoId: string) => Observable<Todo>
  };

  beforeEach( () => {
    //stub TodoService for test purposes
    todoListServiceStub = {
      getTodoById: (todoId: string) => Observable.of([
        {
          id: 'Uts_id',
          owner: 'Utkarsh',
          status: true,
          body: 'Lab 2',
          category: 'labwork'
        },
        {
          id: 'Jay_id',
          owner: 'Jaydon',
          status: true,
          body: 'Agile Reading',
          category: 'homework'
        },
        {
          id: 'ka_id',
          owner: 'Kaelan',
          status: false,
          body: 'Attendance',
          category: 'classwork'
        }
      ].find(todo => todo.id === todoId))
    };

    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [{provide: TodoListService, useValue: todoListServiceStub}]
    });
  });

    beforeEach(async(() => {
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TodoComponent);
        todoComponent = fixture.componentInstance;
      });
    }));

    it('can retrieve Jaydon by ID', () => {
      todoComponent.setId('Jay_id');
      expect(todoComponent.todo).toBeDefined();
      expect(todoComponent.todo.owner).toBe('Jaydon');
      expect(todoComponent.todo.status).toBe(true);
      expect(todoComponent.todo.body).toBe('Agile Reading');
      expect(todoComponent.todo.category).toBe('homework');

    });

    it('returns undefined for EasterBunny', () => {
      todoComponent.setId('EasterBunny');
      expect(todoComponent.todo).not.toBeDefined();
    });

});
