import {Component} from '@angular/core';
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {FooterComponent} from "../../footer/footer.component";
import {NgForOf} from "@angular/common";
import {TodoItemComponent} from "../../todo-item/todo-item.component";
import {TodoItemData} from "../../../interfaces/todo-item-data";
import {TodoListComponent} from "../../todo-list/todo-list.component";
import {TodoListData} from "../../../interfaces/todo-list-data";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, FooterComponent, NgForOf, TodoItemComponent, TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedTodoListData!: TodoListData;
}
