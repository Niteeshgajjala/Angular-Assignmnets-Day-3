import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { OnewayComponent } from './oneway/oneway.component';
import { ParentComponent } from './parent/parent.component';
import { ShowIfPermissionDirective } from './show-if-permission.directive';
import { StuListComponent } from './stu-list/stu-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TwowayComponent } from './twoway/twoway.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,OnewayComponent,TwowayComponent
  ,StudentListComponent,ParentComponent,HighlightDirective,ShowIfPermissionDirective,StuListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj3';
  hasPermission = true;
  
}
