import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { Gender } from './gender';
import { Address } from './address';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-page',
  template: `
  <p> Emplyee Page </p> 
  <router-outlet></router-outlet>  
  `,
  styles: [],
  // encapsulation: ViewEncapsulation.None
})
export class EmployeePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
 }
