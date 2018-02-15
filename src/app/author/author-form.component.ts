import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from './author';
import { Gender } from '../employee/gender';
import { AuthorService } from './author.service';
import { Route } from '@angular/compiler/src/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core/src/metadata/di';


@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styles: [],
  // encapsulation: ViewEncapsulation.None
})
export class AuthorFormComponent implements OnInit, OnDestroy{ 
  

  author:Author=new Author(-1,'','','',0,Gender.F,true);
subscription:Subscription;
  constructor(private authorService:AuthorService,private router:Router,
                               private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // this.subscription=this.activatedRoute.params.
    // subscribe((params)=>{
    //   if(params['id']){
    //   this.author=this.authorService.getById(parseInt(params['id']));
    //                   }
    //                       }
    //           );
              }
              

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
                       } 
            
  addAuthor(aForm:NgForm){ 
    console.log(aForm);
    if(this.author._id>0){
      aForm.value.id=this.author._id;
    }
    this.authorService.addAuthorPage(aForm.value);
    this.router.navigate(['author/alist']);
    // this.author= new Author(-1,'','','',0,Gender.F,true);
  }
   getKeys(){
    return Object.keys(Gender);
  } 
   
}
