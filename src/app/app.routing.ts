import {RouterModule} from '@angular/router';
// import {EmployeePageComponent} from './employee/employee-page.component';
import { HomeComponent } from "./home.component";

 const ROUTES = [
    {path: '#', component: HomeComponent},
    {path:'employee',loadChildren:'app/employee/employee.module#EmployeeModule'},
    {path:'course',loadChildren: 'app/course/course.module#CourseModule'},
    {path:'author',loadChildren: 'app/author/author.module#AuthorModule'},
    {path: '**', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
