import {TodoItemData} from "./todo-item-data";

export interface TodoListData {
  Id: number,
  Name: string,
  Color: string,
  UserId: number,
  TodoItems: TodoItemData[]
}
