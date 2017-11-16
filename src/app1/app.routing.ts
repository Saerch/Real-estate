import { RouterModule , Routes } from "@angular/router";

/* User Components  */
import { HomeComponent } from './components/user/home/home.component';
import { AboutUsComponent } from './components/user/about-us/about-us.component';
import { ErrorComponent } from './components/user/error/error.component';
import { FaqComponent } from './components/user/faq/faq.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { ContactUsComponent } from './components/user/contact-us/contact-us.component';
import { RequestQuoteComponent } from './components/user/request-quote/request-quote.component';

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


const APP_ROUTES:Routes=
[

//User Routes
{ path:'' , component: HomeComponent } ,
{ path:'contact-us' , component: ContactUsComponent } ,
{ path:'about-us' , component: AboutUsComponent } ,
{ path:'faq' , component: FaqComponent } ,
{ path:'error' , component: ErrorComponent } ,
{ path:'request-quote' , component: RequestQuoteComponent } ,


//Admin Routes
{
path:'admin' ,
children:
[
{
path:'',
component:DashboardAdminComponent,
},
{
path:'createuser',
component:AdminCreateuserComponent,
},
{
path:'showuser',
component:AdminShowuserComponent,
},
{
path:'addcourier',
component:AdminAddcourierComponent,
},
{
path:'showcourier',
component:AdminShowcourierComponent,
},
]
},




//Superadmin routes
{
path:'superadmin' ,
children:
[
{
path:'',
component:DashboardSuperadminComponent,
},
{
path:'createadmin',
component:SuperadminCreateadminComponent,
},
{
path:'showadmin',
component:SuperadminShowadminComponent,
},
{
path:'createuser',
component:SuperadminCreateuserComponent,
},
{
path:'showuser',
component:SuperadminShowuserComponent,
},
{
path:'addcourier',
component:SuperadminAddcourierComponent,
},
{
path:'showcourier',
component:SuperadminShowcourierComponent,
},
{
path:'payments',
component:SuperadminShowpaymentComponent,
},
]
},


{ path:'**' , redirectTo:'error' , pathMatch:'full' }


]

export const routing = RouterModule.forRoot(APP_ROUTES);
