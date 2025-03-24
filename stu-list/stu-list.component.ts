import { Component } from '@angular/core';
import { StuDetailComponent } from '../stu-detail/stu-detail.component';
import { StuFormComponent } from '../stu-form/stu-form.component';

@Component({
  selector: 'app-stu-list',
  imports: [StuDetailComponent,StuFormComponent],
  templateUrl: './stu-list.component.html',
  styleUrl: './stu-list.component.css'
})
export class StuListComponent {
  students=[
    {
      "id": 245,
      "name": "Niteesh",
      "gender": "Male",
      "percentage": 70,
      "dob": "2003-02-24",
      "fees": 35000
    },
    {
      "id": 955,
      "name": "Shanmukh",
      "gender": "Male",
      "percentage": 92,
      "dob": "2003-03-18",
      "fees": 19000
    },
    {
      "id": 966,
      "name": "Meghana",
      "gender": "Female",
      "percentage": 40,
      "dob": "2003-12-15",
      "fees": 50000
    },
    {
      "id": 939,
      "name": "Vyshnavi",
      "gender": "Female",
      "percentage": 88,
      "dob": "2001-09-10",
      "fees": 30000
    },
  ]
  onAddStudent(stu:any){
    
    stu.id=this.students.length+1;
    this.students.push(stu);
    
  }
  selectstudent:any=null;
    onEdit(student:any){
      this.selectstudent={...student};
    }
    onUpdate(updated:any){
      const index=this.students.findIndex((s)=>s.id===updated.id);
      this.students[index]=updated;
      this.selectstudent=null;
    }
    onCancelEdit(){
      this.selectstudent=null;
    }
    onDelete(student:any){
      this.students=this.students.filter((s)=>s.id!==student.id);
    }
}
