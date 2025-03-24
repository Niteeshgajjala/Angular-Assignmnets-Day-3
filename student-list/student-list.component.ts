import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1Pipe } from '../p1.pipe';
@Component({
  selector: 'app-student-list',
  imports: [CommonModule,P1Pipe],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students = [
    { name: 'Niteesh', dob: new Date(2003, 2, 24), fee: 25000.5, marks: 87.45 },
    { name: 'Shannu', dob: new Date(2003, 3, 18), fee: 30000, marks: 92.7 },
    { name: 'Jai', dob: new Date(2003, 7, 15), fee: 28000.75, marks: 89.9 }
  ];
  title:string='';
  constructor(){
    this.title="Niteesh Kumar Reddy Gajjala";
  }
}
