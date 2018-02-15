import {EmployeeModule} from './employee/employee.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { CourseModule } from './course/course.module';
import { HomeComponent } from './home.component';
import { APP_ROUTES } from './app.routing';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,EmployeeModule,AuthorModule,CourseModule,APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
