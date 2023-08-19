import { Component } from '@angular/core';
import { TASKS } from 'src/app/Tasks';
import { TaskModel } from 'src/app/TaskModel';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: TaskModel[] = TASKS;


}
