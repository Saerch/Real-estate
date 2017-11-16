import { Component, OnInit } from '@angular/core';
import { DataserviceSuperadminService } from '../../../../services/dataservice-superadmin.service';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class SuperadminCreateuserComponent implements OnInit {

constructor
(
public navbaruser:NavbarUserService,
public superadminsidebar:SidebarSuperadminService,
public adminsidebar: SidebarAdminService,
private svc:DataserviceSuperadminService
)
{
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
}

ngOnInit() 
{

}

}
