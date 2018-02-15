import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthorListComponent } from './author-list.component';
import { AuthorPageComponent } from './author-page.component';
import { AuthorFormComponent } from './author-form.component';
import { AUTHOR_ROUTES } from './author.routing';
import { AuthorService } from './author.service';
import { AuthGuard } from '../../guards/auth.guards';
import { LeavingGuard } from '../../guards/leaving.guard';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AUTHOR_ROUTES,
    HttpModule
  ],
  exports:[
    AuthorPageComponent,AuthorListComponent,AuthorFormComponent
  ],
  providers:[AuthorService,AuthGuard,LeavingGuard],
  declarations: [AuthorListComponent, AuthorPageComponent, AuthorFormComponent]
})
export class AuthorModule { }
