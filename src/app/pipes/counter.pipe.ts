import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
  pure: false
})
export class CounterPipe implements PipeTransform {

  transform(todos: Array<object>, completed: boolean): any {
    return todos.filter((todo) => completed === todo['completed']).length;
  }
}
