import { Component, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgbDateStruct, NgbDateStructAdapter, NgbDatepicker, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ NgbDatepicker, NgbModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  @ViewChild('dp') datepicker: NgbDatepicker;
  date: NgbDateStruct;
  
  constructor(config: NgbDatepickerConfig) {
    const now = new Date();
    config.minDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() + 1 };
  }

  formatDate(date: NgbDateStruct): any {
    if (date) {
      const day = date.day.toString().padStart(2, '0');
      const month = date.month.toString().padStart(2, '0');
      const year = date.year;
      return `${day}/${month}/${year}`;
    }
  }

  onDateChange(date: NgbDateStruct) {
    this.date = date;
  }

}
