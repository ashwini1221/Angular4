import { SkillLevel } from "./skillLevel";

export class Course{
    constructor(public id:number,public coursename:String,public duration:String,
        public fee:number,public skillLevel:SkillLevel,public newCourse:boolean){}         
}