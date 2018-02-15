import {RouterModule} from '@angular/router';
import {EmployeePageComponent} from './employee-page.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeFormComponent } from './employee-form.component';
import { LeavingGuard } from '../../guards/leaving.guard';
import { EmpGuard } from '../../guards/emp.guards';

 const ROUTES = [
     {path: 'employee', component: EmployeePageComponent,
         children:[
        {path: 'eform', component: EmployeeFormComponent,canDeactivate:[LeavingGuard]},
        {path: 'elist', component: EmployeeListComponent,canActivate:[EmpGuard]},
        {path: 'eform/:id', component: EmployeeFormComponent}        
     ],
    }
];

export const EMPLOYEE_ROUTES = RouterModule.forChild(ROUTES);
