import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

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
    this.todoForm.reset()
    this.stateService.setTodo(this.todos)
  }

  updateTodos() {
    this.stateService.setTodo(this.todos)
  }

}
