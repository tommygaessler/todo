import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  getTodos() {
    if(localStorage.getItem('todos')) {
      return JSON.parse(localStorage.getItem('todos'))
    } else {
      return []
    }
  }

  setTodo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
