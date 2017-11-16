import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { DataCourierService } from '../../../../services/CourierDataService';
import {adminDashboard} from '../../../../services/AdminDashService';

@Component({
  selector: 'app-showcourier',
  templateUrl: './showcourier.component.html',
  styleUrls: ['./showcourier.component.css']
})
export class AdminShowcourierComponent implements OnInit {

Darr=[];  
cur_stat="Picked";
prev_stat="Booked";
nlimit:boolean[]=[];
plimit:boolean[]=[];

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private Dcvs:DataCourierService){
this.navbaruser.hide();
this.superadminsidebar.hide();
this.adminsidebar.show();
}

  ngOnInit() {
    this.Dcvs.getAdminCors(adminDashboard.adminId).subscribe( t => {
      this.Darr = t;
      this.Limit_Init();
    } 
  );
  }

  StatChange(s:number, a:number){
    this.plimit[s]=false;
    this.Darr[s].prevStatus = this.Darr[s].curStatus;
    this.Darr[s].curStatus = States[ States[this.Darr[s].curStatus]+1 ];
    if(this.Darr[s].curStatus=="Delivered"){
      this.nlimit[s]=true;
    }
    this.Dcvs.OrderStatusChange(a, this.Darr[s].prevStatus, this.Darr[s].curStatus).subscribe( t=>console.log(t) );
    alert("Status Changed");
    this.ngOnInit();
  }  

  PStatChange(s:number, a:number){
    this.nlimit[s]=false;
    this.Darr[s].curStatus = this.Darr[s].prevStatus;
    this.Darr[s].prevStatus = States[<number><any>States [this.Darr[s].prevStatus]-1];
    if(this.Darr[s].prevStatus=="Booked"){
      this.plimit[s]=true;
    }
    this.Dcvs.OrderStatusChange(a, this.Darr[s].prevStatus, this.Darr[s].curStatus).subscribe( t=>console.log(t) );
    alert("Status Changed");
    this.ngOnInit();
  }
 
  Limit_Init(){
    for(var x=0;x<this.Darr.length;x++){
      if(this.Darr[x].prevStatus=="Booked"){
        this.plimit[x]=true;
      }
      else{
        this.plimit[x]=false;
      }
      
      if(this.Darr[x].curStatus=="Delivered"){
        this.nlimit[x]=true;
      }
      else{
        this.nlimit[x]=false;
      }
    }
  }
}

enum States{
  "Booked",
  "Waiting For Pickup", 
  "Picked", 
  "Received",
  "Dispatched",
  "In-Transit",
  "Reached Nearest Hub",
  "Out for Delivery",
  "Delivered"
};