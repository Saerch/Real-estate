import { Component, OnInit } from '@angular/core';
import { DataserviceSuperadminService } from '../../../../services/dataservice-superadmin.service';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class SuperadminShowuserComponent implements OnInit {

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





U_arr=[];
U_id="";
U_name="";
F_name="";
L_name="";
U_mail="";
U_loc="";


ngOnInit() {
this.svc.getUvals().subscribe( t => {this.U_arr = t} );
}


}
