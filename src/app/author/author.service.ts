
import { Injectable } from '@angular/core';
import { Author } from './author';
import { Gender } from '../employee/gender';
import {Http} from '@angular/http';

@Injectable()
export class AuthorService {

  constructor(private http:Http) { }

//  private authorArray:Array<Author>= [
//     new Author(1,'Nora','Robers','',24,Gender.F, false),
//     new Author(2,' Estelle','Maskame','',26,Gender.M,false),
//     new Author(3,'Joanne','Rowling','K',26,Gender.F,false)     
//   ];

private URL: string= " http://localhost:3000/authors";

  getAuthors(){

    return this.http.get(this.URL); 
  }
//   getMaxId(){
//     let maxId=0;
//     for(let emp of this.authorArray){
//       if(emp.id>maxId){
// maxId=emp.id;
//       }
//     }
//     return maxId+1;
//   } 

  getById(_id:number){
    // return this.authorArray.find(author=>author.id===id);
  }
  delete(id:number){
    return this.http.delete(this.URL+'/'+id);
    // let index = this.authorArray.findIndex(a=>a.id===id);
    // this.authorArray.splice(index,1);
    
  }

  addAuthorPage(auth:Author){
    // if(auth.id===undefined){
    //   auth.id=this.getMaxId();
    //   this.authorArray.push(auth);
    // }
    // else{
    //   let index = this.authorArray.findIndex(a=>a.id===auth.id);
    //   this.authorArray[index]=auth;
    // } 
     
  }
}