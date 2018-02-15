import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeePageComponent } from './employee-page.component';
import { EmployeeFormComponent } from './employee-form.component';
import { EmployeeService } from './employee.service';
import { EMPLOYEE_ROUTES } from './employee.routing';
import { EmpGuard } from '../../guards/emp.guards';
import { LeavingGuard } from '../../guards/leaving.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EMPLOYEE_ROUTES
  ],
  exports:[
    EmployeePageComponent,EmployeeListComponent,EmployeeFormComponent
  ],
  providers:[EmployeeService,EmpGuard,LeavingGuard],
  declarations: [EmployeeListComponent, EmployeePageComponent, EmployeeFormComponent]
})
export class EmployeeModule { }

