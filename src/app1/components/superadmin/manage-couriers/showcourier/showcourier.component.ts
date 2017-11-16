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
export class SuperadminShowcourierComponent implements OnInit {

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
 
C_arr=[];


ngOnInit() 
{
this.svc.getCorVals().subscribe( t => {this.C_arr=t; this.calcPrice()} )
}

calcPrice(){
for(var x=0;x<this.C_arr.length;x++)
  {
  for(var y=0;y<this.C_arr[x].Items.length;y++)
    {
    this.C_arr[x].Tprice += (this.C_arr[x].Items[y].no*this.C_arr[x].Items[y].ppi);
    }
    }
    }

}
