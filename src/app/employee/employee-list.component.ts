import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './Employee';
import{Address} from './address';
import{Gender} from './gender';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  constructor(private empService:EmployeeService,private router:Router){}
  

  employee:Employee= new Employee(-1,'','','',0,0,Gender.F, 
                     new Address('','','',''),true);
  
  employees:Employee[] = this.empService.getEmployees();

  ngOnInit() { 
    this.employees=this.empService.getEmployees();    
              }
  
  handleEdit(id:number){
     this.router.navigate(['/employee/eform',id]);
              }
  handleDelete(id:number){
     this.empService.delete(id); 
              }
  routeMetoAddPage(){
      this.router.navigate(['/employee/eform']);
               }
  toUpperCase(str:string){
    return str.toUpperCase();
  }
  getGender(value:number){
    return Gender[value];
  } 
  
 
 }