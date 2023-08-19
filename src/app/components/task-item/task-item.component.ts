import { Component, Input,Output, EventEmitter} from '@angular/core';
import { TaskModel } from 'src/app/TaskModel';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: TaskModel;
  @Output() onDeleteTask: EventEmitter<TaskModel> = new EventEmitter() 
  @Output() onToggleReminder: EventEmitter<TaskModel> = new EventEmitter() 
  faTimes = faTimes;
 

  onDelete(){
    this.onDeleteTask.emit(this.task);
    
  }

  onToggle(){
    this.onToggleReminder.emit(this.task);
    
  }
}
