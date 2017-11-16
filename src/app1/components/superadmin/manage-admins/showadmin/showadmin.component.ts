import { Component, OnInit } from '@angular/core';
import { DataserviceSuperadminService } from '../../../../services/dataservice-superadmin.service';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';

@Component({
  selector: 'app-showadmin',
  templateUrl: './showadmin.component.html',
  styleUrls: ['./showadmin.component.css']
})
export class SuperadminShowadminComponent implements OnInit {

 p: number = 1;
 collection: any[]; 


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


Ad_arr=[];
Ad_id="";
Ad_loc="";

  
ngOnInit() 
{
this.svc.getAdvals().subscribe( t => {this.Ad_arr = t});
}

hashCode(str) {
return str.split('').reduce((prevHash, currVal) =>
((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
}

getAstk(str:string):string
{
var t="";
for(var x=0;x<str.length;x++)
{
t+='*';
}
return t;
}

}
