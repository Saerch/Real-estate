import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';

declare var $: any;

@Component({
  selector: 'app-qtrack',
  templateUrl: './qtrack.component.html',
  styleUrls: ['./qtrack.component.css']
})
export class QtrackComponent implements OnInit {

States:any[]=[
  {
    Prog:"Booked",
    viz:true,
    wid:"11%"  
  },
  {
    Prog:"Waiting For Pickup",
    viz:true,
    wid:"11%"
  },
  {
    Prog:"Picked",
    viz:true,
    wid:"11%"
  },
  {
    Prog:"Received",
    viz:true,
    wid:"11%"
  },
  {
    Prog:"Dispatched",
    viz:true,
    wid:"11%"
  },
  {
    Prog:"In-Transit",
    viz:true,
    wid:"11%"
  },
  {
    Prog:"Reached Nearest Hub",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Out For Delivery",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Delivered",
    viz:false,
    wid:"12%"
  } 
]

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService){
   this.navbaruser.show();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
}
  ngOnInit() {
    $(".nav-folderized h4").click(function(){
	    $(this).parent(".nav").toggleClass("open"); 
	    $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
    });
    this.progressJs();
  }

  progressJs(){
    var x = document.getElementsByClassName("progress-bar-warning");
    for(var i=0;i<x.length;i++){
      if(!this.States[i].viz){
        (<HTMLBodyElement>x.item(i)).style.visibility="hidden";  
      }
      (<HTMLBodyElement>x.item(i)).innerHTML=this.States[i].Prog;
      (<HTMLBodyElement>x.item(i)).style.width=this.States[i].wid;
    }
  }

}

