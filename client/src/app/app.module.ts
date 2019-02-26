import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserListComponent} from './users/user-list.component';
import {TodoListComponent} from './todos/todo-list.component';
import {TodoCompleteListComponent} from './Complete/todo-list-complete.component';
import {TodoIncompleteListComponent} from './Incomplete/todo-list-incomplete.component';
import {UserListService} from './users/user-list.service';
import {TodoListService} from './todos/todo-list.service';
import {Routing} from './app.routes';
import {APP_BASE_HREF} from '@angular/common';

import {CustomModule} from './custom.module';
import {UserComponent} from './users/user.component';
import {TodoComponent} from './todos/todo.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio'; //Remove if we end up going with checkboxes. Although it doesn't harm to jus tahve it


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    CustomModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    TodoListComponent,
    TodoComponent,
    TodoCompleteListComponent,
    TodoIncompleteListComponent,

  ],
  providers: [
    UserListService,
    TodoListService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},

  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
