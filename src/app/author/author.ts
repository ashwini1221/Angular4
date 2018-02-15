import { Gender } from "../employee/gender";

export class Author{
    constructor(public _id:number,public fname:string,public lname:string,
      public mname:string,public age:number,
      public gender:Gender,public newAuthor:boolean){}
}