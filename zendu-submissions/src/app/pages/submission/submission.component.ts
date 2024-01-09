import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { MapComponent } from '../../components/map/map.component';
import { IWorkFlowItem } from '../../app.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [HeaderComponent, MatButtonToggleModule, ToolbarComponent, MapComponent, CommonModule],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent implements OnInit{

  workFlowItems: IWorkFlowItem[];
  constructor() {}

  ngOnInit() {
    this.workFlowItems = [
      {
        'from': 'denisgordiyenya@gmail.com',
        'to': 'denisgordiyenya@gmail.com',
        'dueDate': '06 December',
        'status': 'Uncomplete'
      },
      {
        'from': 'denisgordiyenya@gmail.com',
        'to': 'denisgordiyenya@gmail.com',
        'dueDate': '06 December',
        'status': 'Low Risk'
      },
      {
        'from': 'denisgordiyenya@gmail.com',
        'to': 'denisgordiyenya@gmail.com',
        'dueDate': '06 December',
        'status': 'Uncomplete'
      },
      {
        'from': 'denisgordiyenya@gmail.com',
        'to': 'denisgordiyenya@gmail.com',
        'dueDate': '06 December',
        'status': 'Needs Review'
      },]
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Low Risk':
        return 'low-risk';
      case 'Uncomplete':
        return 'uncomplete';
      case 'Needs Review':
        return 'needs-review';
      default:
        return '';
    }
  }
}
