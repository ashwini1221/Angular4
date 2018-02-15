import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from './Employee';
import { Gender } from './gender';
import { Address } from './address';
import { EmployeeService } from './employee.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute,Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form-component.css']
  // encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent implements OnInit,OnDestroy { 
 
  employee:Employee= new Employee(-1,'','','',0,0,Gender.F, new Address('','','',''),true);
  subscription:Subscription;
  constructor(private empService:EmployeeService,private router:Router,
                           private activatedRoute:ActivatedRoute) {}
  ngOnInit() {
    this.subscription=this.activatedRoute.params.
    subscribe((params)=>{
      console.log('id');
      if(params['id']){
      this.employee=this.empService.getById(parseInt(params['id']));
                       } 
                         }
       );
  }
  // employee:Employee= new Employee(-1,'','','',0,0,Gender.F, new Address('','','',''),true);

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
                       } 

  getKeys(){
    return Object.keys(Gender);
  }
  addEmployee(){
    this.empService.addEmployeePage(this.employee);
    this.router.navigate(['employee/elist']);
    // this.employee= new Employee(-1,'','','',0,0,Gender.F, new Address('','','',''),true);
      }
}
