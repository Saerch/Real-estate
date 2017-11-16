import { Component } from '@angular/core';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { NavbarUserService } from './services/navbar-user.service';
import { SidebarSuperadminService } from './services/sidebar-superadmin.service';
import { SidebarAdminService } from './services/sidebar-admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

navbarVisible: boolean;
superadminSidebarVisible:boolean;
adminSidebarVisible:boolean;


 constructor
 (
	public navbaruser:NavbarUserService,
	public superadminsidebar:SidebarSuperadminService,
 	public adminsidebar: SidebarAdminService
 ) 

 {
  
 }



}
