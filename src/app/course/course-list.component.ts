import {Router} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { SkillLevel } from './skillLevel';
import { Course } from './course';
import { CourseService } from './course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CourseListComponent implements OnInit {

   
  constructor(private courseService:CourseService,private router:Router) { }
  courses:Course[];
  ngOnInit() {
    this.courses=this.courseService.getCourses();
  } 
  handleDelete(id:number){
    this.courseService.delete(id); 
  }
  handleEdit(id:number){
    this.router.navigate(['/course/cform',id]);
  }

  routeMetoAddPage(){
    this.router.navigate(['/course/cform']);
  }
  
  check(){
    for(let b of this.courses){
     console.log( b.skillLevel);
    }
  }
}
