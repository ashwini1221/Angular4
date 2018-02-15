import {AuthorFormComponent} from './author-form.component';
import {RouterModule} from '@angular/router';
import { AuthorPageComponent } from './author-page.component';
import { AuthorListComponent } from './author-list.component';
import { AuthGuard } from '../../guards/auth.guards';
import { LeavingGuard } from '../../guards/leaving.guard';

 const ROUTES = [
     {path: 'author', component: AuthorPageComponent,
     children:[
                {path: 'alist', component: AuthorListComponent,canActivate:[AuthGuard]},
                {path: 'aform', component: AuthorFormComponent},                
                {path: 'aform/:id', component: AuthorFormComponent},       
              ],
    } 
                 ];

export const AUTHOR_ROUTES = RouterModule.forChild(ROUTES);

