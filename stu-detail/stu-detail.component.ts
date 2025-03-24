import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-stu-detail',
  imports: [CommonModule,FormsModule],
  templateUrl: './stu-detail.component.html',
  styleUrl: './stu-detail.component.css'
})
export class StuDetailComponent {
  @Input() student:any;
  @Output() update=new EventEmitter<any>();
  @Output() cancel=new EventEmitter<void>();
  formdata:any={};
  ngOnChanges(){
    this.formdata={...this.student};
  }
  onSubmit(){
    this.update.emit(this.formdata);
  }
  onCancel(){
    this.cancel.emit();
  }
}
