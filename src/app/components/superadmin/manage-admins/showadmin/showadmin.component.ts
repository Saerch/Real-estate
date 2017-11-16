import { Component, OnInit } from '@angular/core';
import { DataAdminService } from '../../../../services/AdminDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Admin_class } from '../../../../Blueprints/aDmin';

@Component({
  selector: 'app-showadmin',
  templateUrl: './showadmin.component.html',
  styleUrls: ['./showadmin.component.css']
})
export class SuperadminShowadminComponent implements OnInit {

Cur_Entry:any={};
Ad_id="";
Ad_loc="";
Ad_arr=[];
Ad_newPass="";
cur_index:number=0;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataAdminService){
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
}
  
ngOnInit() {
  this.svc.getAdvals().subscribe( t => {this.Ad_arr = t});
}

getAstk(str:string):string{
    var t="";
    for(var x=0;x<str.length;x++)
      {
        t+='*';
      }
    return t;
}

Indexer(s:number){
  console.log(s);
  this.cur_index=s;
  this.Cur_Entry=this.Ad_arr[s];
}

ReplaceAd(){
  /*if(this.Ad_newPass!="" && this.Ad_newPass.length>=6){
    this.Cur_Entry.adminPass = this.Ad_newPass;
  }*/
  this.svc.UpdateAdmin(this.Cur_Entry, this.Cur_Entry.adminId).subscribe(t => {console.log(t); this.ngOnInit()});
}

DeleteAdmin(){
  this.svc.DelAdminById(this.Cur_Entry.adminId).subscribe( t => {console.log(t); this.ngOnInit()} );
  alert("Admin Deleted !!!");
}

AdminPermit(){
  if(this.Cur_Entry.active){
    console.log("Admin Currently Active !!");
    this.svc.AdminAccess(this.Cur_Entry.adminId, false).subscribe( t => {console.log(t); this.ngOnInit()} );
  }
  else{
    console.log("Admin Currently InActive !!");
    this.svc.AdminAccess(this.Cur_Entry.adminId, true).subscribe( t => {console.log(t); this.ngOnInit()} );
  }
}

}
