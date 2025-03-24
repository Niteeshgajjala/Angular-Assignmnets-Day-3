import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-stu-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './stu-form.component.html',
  styleUrl: './stu-form.component.css'
})
export class StuFormComponent {
  @Output() addstudent=new EventEmitter<any>();
formData:any={name:'',gender:'',dob:'',percentage:0,fees:0};
onsubmit(){
  this.addstudent.emit(this.formData);
  this.formData={name:'',gender:'',dob:'',percentage:0,fees:0};
}
}
