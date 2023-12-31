import { TaskModel } from './../TaskModel';
import { TASKS } from './../Tasks';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'https://task-backend-bcgz.onrender.com/tasks'


  constructor(private http: HttpClient) { 


  }

 getTasks(): Observable<TaskModel[]> {
  return this.http.get<TaskModel[]>(this.apiUrl)
 }

 deleteTask(task: TaskModel): Observable<TaskModel> {
  const url =`${this.apiUrl}/${task.id}`;
  return this.http.delete<TaskModel>(url)
  
 }

 updateTaskReminder(task: TaskModel): Observable<TaskModel> {
  const url =`${this.apiUrl}/${task.id}`;
  return this.http.put<TaskModel>(url, task, httpOptions)
 }

 addTask(task: TaskModel):Observable<TaskModel>{
  return this.http.post<TaskModel>(this.apiUrl, task, httpOptions)
 }


}
