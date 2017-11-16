import { Component, OnInit } from '@angular/core';
import { DataCourierService } from '../../../../services/CourierDataService';
import { DataUserService } from '../../../../services/UserDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { LocalAssets } from '../../../../services/LocalDataService';
import { Bookings, Item_groups } from '../../../../Blueprints/Order';

@Component({
  selector: 'app-addcourier',
  templateUrl: './addcourier.component.html',
  styleUrls: ['./addcourier.component.css']
})
export class SuperadminAddcourierComponent{

  Checker=true;
  nFound=false;
  trackDiv=false;
  trackFoot=true;
  Ctcontrol=true;
  Cfcontrol=true;
  uAdd={
        fromcountry:"",
        fromcity:"",
        fromstreet:""
        };
  DDown=[];
  fcities=[];
  tcities=[];
  Arr=Array<Item_groups>();
  Ord:Bookings;
  Uid:number;
  Tweight=0;
  Tprice=0;
  bmode="";

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataCourierService, private lvc:LocalAssets, private usvc:DataUserService){
this.Checker=true;
this.trackDiv=false;
this.trackFoot=true;
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
lvc.getCountryDDowns().subscribe( t => {this.DDown = t} );
this.Arr.push(new Item_groups("",1,0,0,""));
}

Extns(){
    this.Arr.push(new Item_groups("",1,0,0,""));
    this.trackFoot=true;
  }

FormSub(t){
  this.Ord = new Bookings(this.Uid,t.fstreet, t.fcity,t.fcountry,t.tstreet, t.tcity, t.tcountry,this.Tweight, this.Tprice,new Date(2017,11,8), new Date(2017,11,11),this.bmode,"Waiting For Pickup",this.Arr);
  //console.log(this.Ord);
  this.svc.postOrder(this.Ord).subscribe(t  => console.log(t));
}

dimChange(a,b,c,d){
  if(parseInt(a)>0 && parseInt(b)>0 && parseInt(c)>0){
    this.Arr[d].dimension=(a+"x"+b+"x"+c);
  }
}

qtyChange(a,b){
  this.Arr[b].noOfItems = parseInt(a);
}

WtChange(a,b){
  this.Arr[b].weightPerItem = parseInt(a);
}

prChange(a,b){
  this.Arr[b].pricePerItem = parseInt(a);
}

typeChange(a,b){
  this.Arr[b].type = a;
}

PrefChange(a){
  switch (a)
  {
    case "Standard":{
      this.bmode="Cargo";
      break;
    }

    case "Express":{
      this.bmode="Air";
    }

    case "Custom":{
      this.bmode="Ship";
      break;
    }

    default:{
      this.bmode="Cargo";
      break;
    }
  }
  this.Tprice=0;
  this.Tweight=0;
  this.calcPrice();
  this.calcWeight();
}

Dxtns(){
    if(this.Arr.length==1){
      this.Arr.length=0;
    this.trackFoot=false;}
    else{
      this.Arr.length--;
    }
  }

  getId(s){
    this.svc.checkUser(parseInt(s)).subscribe(t => 
      {
        if(t.text()=="Found"){
          this.nFound=false; this.Checker=false; this.trackDiv=true; this.Uid=parseInt(s);
        }
        else{
          this.nFound=true;
        }
      }
    );
  }  

  calcWeight(){
    for(var x=0;x<this.Arr.length;x++){
      this.Tweight+=(this.Arr[x].weightPerItem*this.Arr[x].noOfItems);
    }
  }

  calcPrice(){
    for(var x=0;x<this.Arr.length;x++)
      {
            this.Tprice+=(this.Arr[x].pricePerItem*this.Arr[x].noOfItems);
      }
      this.Tprice+=(0.2)*this.Tprice;
  }

  FromCtrChange(s){
  //console.log(s);
  this.Cfcontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.fcities =  this.DDown[x].Cities;
    }
  }
}

    ToCtrChange(s){
    //console.log(s);
    this.Ctcontrol=false;
    for(var x=0; x<this.DDown.length;x++){
      if(s==this.DDown[x].Country){
        this.tcities =  this.DDown[x].Cities;
      }
    }
  }

  AddChange(s){
    if(s){
    this.usvc.GetUserById(this.Uid).subscribe( t => 
      {
        this.uAdd.fromcountry=t.ucountry;
        this.FromCtrChange(t.ucountry); 
        this.uAdd.fromcity=t.ucity; 
        this.uAdd.fromstreet=t.ustreet
      } );
    }else{
      this.uAdd.fromstreet="";
      this.Cfcontrol=true;
      this.uAdd.fromcity="";
      this.uAdd.fromcountry="";
    }
  }

}
