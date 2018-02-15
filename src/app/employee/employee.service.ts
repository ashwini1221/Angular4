import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Gender } from './gender';
import { Address } from './address';

@Injectable()
export class EmployeeService {

  constructor() { }
  private employees:Array<Employee>= [
    new Employee(1,'Ashwini','Yeleti','Reddy',24,25000,Gender.F, new Address('knr','AP','Knr','12345'),false),
    new Employee(2,'Pavaneesh','Gurram','Reddy',26,55000,Gender.M, new Address('mini','MN','Eden','12345'),false),
    new Employee(3,'Archana','Yeleti','Reddy',26,45000,Gender.F, new Address('Huston','Texas','city','12345'),false)     
  ];
getEmployees(){
  return this.employees;
}
  getMaxId(){
    let maxId=0;
    for(let emp of this.employees){
      if(emp.id>maxId){
         maxId=emp.id;
      }
    }
    return maxId+1;
  }

  getById(id:number){
    return this.employees.find(employee=>employee.id===id);
  }
  delete(id:number){
    let index = this.employees.findIndex(a=>a.id===id);
    this.employees.splice(index,1);
    
  }

  addEmployeePage(empl:Employee){
    if(empl.id===-1){
      empl.id=this.getMaxId();
      this.employees.push(empl);
    }
    else{
      let index = this.employees.findIndex(a=>a.id===empl.id);
      this.employees[index]=empl;
    }
     
  }
 }