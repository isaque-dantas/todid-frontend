import {Component, Input} from '@angular/core';
import {TodoItemData} from "../../interfaces/todo-item-data";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() data!: TodoItemData;

}
