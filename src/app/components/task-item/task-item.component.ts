import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/TaskModel';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: TaskModel;
  faTimes = faTimes;
}
