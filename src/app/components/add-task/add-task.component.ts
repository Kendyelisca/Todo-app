import { Component, Output, EventEmitter} from '@angular/core';
import { TaskModel } from 'src/app/TaskModel';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Output() onAddTask : EventEmitter<TaskModel>= new EventEmitter();


text: string = '';
day: string = '|';
reminder: boolean= false;


onSubmit(){
  if(!this.text){
    alert('Please add a task!')
    return;
  }

  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
  }

  //emit event 

this.onAddTask.emit(newTask);


  this.text = '';
  this.day = '';
  this.reminder= false;
}
}
