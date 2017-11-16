import { Component, OnInit } from '@angular/core';
import { DataserviceSuperadminService } from '../../../../services/dataservice-superadmin.service';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';

@Component({
  selector: 'app-showcourier',
  templateUrl: './showcourier.component.html',
  styleUrls: ['./showcourier.component.css']
})
export class AdminShowcourierComponent implements OnInit {


constructor
(
public navbaruser:NavbarUserService,
public superadminsidebar:SidebarSuperadminService,
public adminsidebar: SidebarAdminService
)
{
this.navbaruser.hide();
this.superadminsidebar.hide();
this.adminsidebar.show();
}

  ngOnInit() {
  }
  
}
