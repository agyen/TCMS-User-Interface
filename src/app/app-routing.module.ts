import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { DetailsComponent } from './details/details.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddprojectComponent } from './addproject/addproject.component';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'projects', component: ProjectsComponent},
  {path:'reports', component:ReportsComponent},
  {path:'details', component:  DetailsComponent},
  {path: 'addcustomer', component: AddcustomerComponent},
  {path:'addproject', component:AddprojectComponent},

  { path : "", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
