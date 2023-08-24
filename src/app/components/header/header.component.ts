import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask : boolean = false;
  subcription :Subscription;

  constructor(private uiService:UiService){
     this.subcription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
