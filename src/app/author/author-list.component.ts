import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author/author';
import { Gender } from '../employee/gender';
import { AuthorService } from './author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AuthorListComponent implements OnInit {

  constructor(private authorService:AuthorService,private router:Router) { }

  authors:Author[] = [];

  ngOnInit() {

    this.authorService.getAuthors().subscribe(responce =>{
      console.log(responce);
      this.authors= responce.json();
    });
  }   
  handleEdit(id:number){
    this.router.navigate(['/author/aform',id]);
  }
  handleDelete(id:number){
    this.authorService.delete(id).subscribe(response =>{
      if(response.status===200){
      let index= this.authors.findIndex(a=> a._id ===id);
      this.authors.splice(index,1);
    }}); 
  }
  routeMetoAddPage(){
     this.router.navigate(['/author/aform']);
   }
    
  getGender(value:number){
    return Gender[value];
  }   
}
