import {RouterModule} from '@angular/router';
import {CoursePageComponent} from './course-page.component';
import { CourseListComponent } from './course-list.component';
import { CourseFormComponent } from './course-form.component';
import { LeavingGuard } from '../../guards/leaving.guard';
import { CourseGuard } from '../../guards/course.guards';

 const ROUTES = [
     {path: 'course', component: CoursePageComponent,
     children:[
                {path: 'clist', component: CourseListComponent,canActivate:[CourseGuard]},
                {path: 'cform', component: CourseFormComponent,canDeactivate:[LeavingGuard]},
                {path: 'cform/:id', component: CourseFormComponent}        
              ]
    } 
               ];

export const COURSE_ROUTES = RouterModule.forChild(ROUTES);
