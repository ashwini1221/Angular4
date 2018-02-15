
import { Injectable } from '@angular/core';
import { Course } from './course';
import { SkillLevel } from './skillLevel';

@Injectable()
export class CourseService {

  constructor() { }
private courses:Array<Course>=[
    new Course(1,'JAVA','4 months',500,SkillLevel.Entry,false),
    new Course(2,'UI','2 months',600,SkillLevel.Intermediate,false),
    new Course(3,'DataBase','3 months',300,SkillLevel.Entry,false)
  ];
  getCourses(){
    return this.courses;
  }
  getSkillLevel(value:SkillLevel){
    //this.check();
    
    return value;
  }
  getMaxId(){
    let maxId=0;
    for(let course of this.courses){
      if(course.id>maxId){
  maxId=course.id;
      }
    }
    return maxId+1;
  }

  getById(id:number){
    return this.courses.find(course=>course.id===id);
  }

  delete(id:number){
    let index = this.courses.findIndex(a=>a.id===id);
    this.courses.splice(index,1);
    
  }

  addCoursePage(course:Course){
    if(course.id===0){
    course.id=this.getMaxId();
    this.courses.push(course); 
    }else{
      let index = this.courses.findIndex(a=>a.id===course.id);
      this.courses[index]=course;
    }
  }
}