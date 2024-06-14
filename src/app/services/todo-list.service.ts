import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {TodoListData} from "../interfaces/todo-list-data";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) {
  }

  getList(id: number) {
    return this.http.get<TodoListData>(
      `http://localhost:5241/lists/${id}/`)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(() => new Error('TodoList not found'))
    }

    return throwError(() => new Error('Something bad occurred. Try again later.'))
  }
}
