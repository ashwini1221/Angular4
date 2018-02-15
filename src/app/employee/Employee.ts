import { Gender } from './gender';
import{Address} from './address';

export class Employee{
    constructor(public id:number,public fname:string,public lname:string,
      public mname:string,public age:number,
      public salary:number,public gender:Gender,public address:Address,public newEmp:boolean){
  
    }
    
    // public get fname() {
    //   return this._fname;
    // }
    // public set fname(fname : string) {
    //   this._fname = fname;
    // }
    // public get lname() {
    //   return this._lname;
    // }
    // public set lname(lname : string) {
    //   this._fname = lname;
    // }
    // public get mname() {
    //   return this._mname;
    // }
    // public set mname(mname : string) {
    //   this._mname = mname;
    // }
    // public get age() {
    //   return this._age;
    // }
    // public set age(age : number) {
    //   this._age = age;
    // }
    // public get salary() {
    //   return this._salary;
    // }
    // public set salary(salary : number) {
    //   this._salary = salary;
    } 
