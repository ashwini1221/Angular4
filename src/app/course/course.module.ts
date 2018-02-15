import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list.component';
import { CoursePageComponent } from './course-page.component';
import { CourseFormComponent } from './course-form.component';
import { COURSE_ROUTES } from './course.routing';
import { CourseService } from './course.service';
import { CourseGuard } from '../../guards/course.guards';
import { LeavingGuard } from '../../guards/leaving.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    COURSE_ROUTES
  ],
  exports:[
    CoursePageComponent
  ],
  providers:[CourseService,CourseGuard,LeavingGuard],
  declarations: [CourseListComponent, CoursePageComponent, CourseFormComponent]
})
export class CourseModule { }
