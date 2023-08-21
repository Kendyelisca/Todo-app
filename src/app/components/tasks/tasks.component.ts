import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { TaskModel } from 'src/app/TaskModel';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: TaskModel[] = [];
constructor(private taskService: TaskService){}
 
ngOnInit(): void {
 this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);

}

deleteTask(task: TaskModel) {
  this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  
}

toggleReminder(task: TaskModel){
  task.reminder = ! task.reminder;
  this.taskService.updateTaskReminder(task).subscribe()
}


addTask(task: TaskModel){
  this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
}
}
