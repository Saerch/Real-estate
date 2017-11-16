import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor
 (
	public navbaruser:NavbarUserService,
	public superadminsidebar:SidebarSuperadminService,
 	public adminsidebar: SidebarAdminService
 ) 

 {
   this.navbaruser.show();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
 }


ngOnInit()
{
  $(".nav-folderized h4").click(function(){
	  $(this).parent(".nav").toggleClass("open"); 
	  $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
  });
  
}

}
