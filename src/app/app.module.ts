import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddprojectComponent } from './addproject/addproject.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CustomersComponent,
    ReportsComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    AddcustomerComponent,
    AddprojectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
