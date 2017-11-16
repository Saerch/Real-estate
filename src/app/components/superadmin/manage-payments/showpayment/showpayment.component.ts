import { Component, OnInit } from '@angular/core';
import { DataPaymentService } from '../../../../services/PymtDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';

@Component({
  selector: 'app-showpayment',
  templateUrl: './showpayment.component.html',
  styleUrls: ['./showpayment.component.css']
})
export class SuperadminShowpaymentComponent implements OnInit {

P_arr=[];
C_id="";
T_py="";
R_py="";

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataPaymentService){
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
}

ngOnInit() {
  this.svc.getPyVals().subscribe( t => {this.P_arr = t} );
}


}
