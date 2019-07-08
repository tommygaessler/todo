import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoForm: FormGroup;
  todos: Array<object> = [];

  constructor(formBuilder: FormBuilder, public stateService: StateService) {
    this.todoForm = formBuilder.group({
      'name': [''],
      'completed': [false]
    })
  }

  ngOnInit() {
    this.todos = this.stateService.getTodos()
  }

  addTodo() {
    this.todos.push(this.todoForm.value)
    this.updateTodos()
    this.todoForm.controls['name'].reset('')
  }

  updateTodos() {
    this.stateService.setTodo(this.todos)
  }
}
