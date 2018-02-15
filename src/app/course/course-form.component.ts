import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from './course';
import { SkillLevel } from './skillLevel';
import { CourseService } from './course.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styles: [],
  // encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent implements OnInit,OnDestroy {
 
  
  course:Course=new Course(0,'','',0,SkillLevel.Intermediate,true)
  
  subscription:Subscription;
  

  constructor(private courseService:CourseService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.activatedRoute.params.
    subscribe((params)=>{
      if(params['id']){
      this.course=this.courseService.getById(parseInt(params['id']));
                      }
                          }
              );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  getkeys(){
    return Object.keys(SkillLevel);
  }
  addCourse(){
    this.courseService.addCoursePage(this.course);
    this.router.navigate(['course/clist']);
  this.course=new Course(0,'','',0,SkillLevel.Intermediate,true);
  }

}
