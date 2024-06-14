import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {TodoListData} from "../../interfaces/todo-list-data";

@Component({
  selector: 'app-todo-list',
  standalone: true,
    imports: [
        NgForOf,
        TodoItemComponent
    ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() data!: TodoListData;

}
