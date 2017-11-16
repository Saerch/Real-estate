import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../../../services/UserDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Router } from '@angular/router';
import { User_class } from '../../../../Blueprints/uSer';
import { LocalAssets } from '../../../../services/LocalDataService';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class SuperadminCreateuserComponent{

Ccontrol=true;
DDown=[];
cities=[];
nUser:User_class;  
nextFlag=false;
password="";
cpassword="";
empty="";
Ccode=0;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataUserService, private rt:Router, private lsc:LocalAssets){
this.nextFlag=true;
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
lsc.getCountryDDowns().subscribe( t => {console.log(t); this.DDown = t} );
}

sGetUser(t){
  this.nUser = new User_class(t.fname, t.lname, t.pass, t.gender, parseInt(t.mcc), parseInt(t.mob),t.email,t.street,t.city,t.country,true);
  console.log(this.nUser);
  this.svc.postUser(this.nUser).subscribe( t => {console.log(t)} );
  this.nextFlag=false;
}

CtrChange(s){
  //console.log(s);
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
      this.Ccode = this.DDown[x].Ccode;
    }
  }
}

Back(){
  this.nextFlag=true;
}

usList(){
  this.rt.navigate(['superadmin','showuser']);
}

Redirec(){
  this.rt.navigate(['superadmin','addcourier']);
}

ShoPass(){
 var x = <HTMLInputElement>document.getElementById("passo1");
 var y = <HTMLInputElement>document.getElementById("passo2");
 
 if(x.type == "password"){
   x.type = "text";
   y.type = "text";
 }else{
   x.type = "password";
   y.type = "password";  
 }
}

}
