import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { IDataChart } from './services/data-charts';
import { ChartsService } from './services/charts.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

/*  SERVICES  */
import { NavbarUserService } from './services/navbar-user.service';
import { SidebarAdminService } from './services/sidebar-admin.service';
import { SidebarSuperadminService } from './services/sidebar-superadmin.service';
import { DataserviceSuperadminService } from './services/dataservice-superadmin.service';




/*  PIPES  */

import { Pipe1,Pipe2,Pipe3,Pipe4,Pipe5,Pipe6,Pipe7,Pipe8 } from './pipes/globalpipe';





/*  COMPONENTS  */

/*  User Components  */

import { HomeComponent } from './components/user/home/home.component';
import { AboutUsComponent } from './components/user/about-us/about-us.component';
import { ErrorComponent } from './components/user/error/error.component';
import { FaqComponent } from './components/user/faq/faq.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { ContactUsComponent } from './components/user/contact-us/contact-us.component';

/*  Admin Components  */

import { DashboardAdminComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminAddcourierComponent } from './components/admin/manage-couriers/addcourier/addcourier.component';
import { AdminShowcourierComponent } from './components/admin/manage-couriers/showcourier/showcourier.component';
import { AdminCreateuserComponent } from './components/admin/manage-users/createuser/createuser.component';
import { AdminShowuserComponent } from './components/admin/manage-users/showuser/showuser.component';
import { SidebarAdminComponent } from './components/admin/admin-sidebar/admin-sidebar.component';


/*  Superadmin Components  */

import { DashboardSuperadminComponent } from './components/superadmin/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminCreateadminComponent } from './components/superadmin/manage-admins/createadmin/createadmin.component';
import { SuperadminShowadminComponent } from './components/superadmin/manage-admins/showadmin/showadmin.component';
import { SuperadminCreateuserComponent } from './components/superadmin/manage-users/createuser/createuser.component';
import { SuperadminShowuserComponent } from './components/superadmin/manage-users/showuser/showuser.component';
import { SuperadminAddcourierComponent } from './components/superadmin/manage-couriers/addcourier/addcourier.component';
import { SuperadminShowcourierComponent } from './components/superadmin/manage-couriers/showcourier/showcourier.component';
import { SuperadminShowpaymentComponent } from './components/superadmin/manage-payments/showpayment/showpayment.component';
import { SidebarSuperadminComponent } from './components/superadmin/superadmin-sidebar/superadmin-sidebar.component';

import { Test2Component } from './test/test2/test2.component';
import { Test3Component } from './test/test3/test3.component';
import { Test4Component } from './test/test4/test4.component';
import { Test5Component } from './test/test5/test5.component';
import { Test6Component } from './test/test6/test6.component';
import { Test7Component } from './test/test7/test7.component';
import { Test8Component } from './test/test8/test8.component';
import { Test11Component } from './test/test11/test11.component';
import { Test12Component } from './test/test12/test12.component';
import { Test13Component } from './test/test13/test13.component';
import { Test14Component } from './test/test14/test14.component';
import { Test15Component } from './test/test15/test15.component';
import { Test16Component } from './test/test16/test16.component';
import { Test1aComponent } from './test/test1a/test1a.component';
import { Test1bComponent } from './test/test1b/test1b.component';
import { Test1fComponent } from './test/test1f/test1f.component';
import { RequestQuoteComponent } from './components/user/request-quote/request-quote.component';


@NgModule({
declarations: 
[
AppComponent,
//Pipes
Pipe1,Pipe2,Pipe3,Pipe4,Pipe5,Pipe6,Pipe7,Pipe8,

//User
HomeComponent,
AboutUsComponent,
ErrorComponent,
FaqComponent,
NavbarComponent,
ContactUsComponent,

//Admin
DashboardAdminComponent,
AdminAddcourierComponent,
AdminShowcourierComponent ,
AdminCreateuserComponent,
AdminShowuserComponent,
SidebarAdminComponent,

//Superadmin
DashboardSuperadminComponent,
SuperadminCreateadminComponent,
SuperadminShowadminComponent,
SuperadminCreateuserComponent,
SuperadminShowuserComponent,
SuperadminAddcourierComponent,
SuperadminShowcourierComponent,
SuperadminShowpaymentComponent,
SidebarSuperadminComponent,

Test2Component, Test3Component, Test4Component, Test5Component, Test6Component, Test7Component,
 Test8Component,
 Test11Component,
 Test12Component,
 Test13Component,
 Test14Component,
 Test15Component,
 Test16Component,
 Test1aComponent,
 Test1bComponent,
 Test1fComponent,
 RequestQuoteComponent,

],
  
imports: 
[
BrowserModule,
HttpModule,
routing,
RouterModule,
ChartsModule,
FormsModule,
NgxPaginationModule
],

providers:
[
NavbarUserService,
SidebarAdminService,
SidebarSuperadminService,
DataserviceSuperadminService,
ChartsService
],

bootstrap: [AppComponent]

})
export class AppModule { }
