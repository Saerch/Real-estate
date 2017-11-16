import { Component, OnInit } from '@angular/core';
import {LoginDetails} from './LoginDetails';
import {LoginService} from './login.service';
import {Shipment} from './Shipment';

@Component({
  selector: 'app-track-dummy',
  templateUrl: './track-dummy.component.html',
  styleUrls: ['./track-dummy.component.css'],
  providers:[LoginService]
})
export class TrackDummyComponent {

  regDiv=true;
  trackDiv=false;
  trackFoot=false;
  empty="";
  password="";
  cpassword="";
  Arr=[];
  reg:LoginDetails;
  sref:Shipment;

 constructor(private svc:LoginService){}

 ngOnInit()
{

}

  Direct(){
    console.log("Opening Track Panel ");
    this.regDiv=false;
    this.trackDiv=true;
  }

  Extns(){
    this.Arr.length++;
    this.trackFoot=true;
  }

  Dxtns(){
    if(this.Arr.length==1){
      this.Arr.length=0;
    this.trackFoot=false;}
    else{
      this.Arr.length--;
    }
  }

  

  getUser(t){
    //console.log(t);
    //this.regDiv=false;
    //this.trackDiv=true;
    this.reg = new LoginDetails(t.fname , t.lname , t.gender ,t.mob, (t.street + " " + t.city +" "+t.country),t.email ,t.pass , t.cpass);
    console.log(this.reg);
    this.svc.postUser(this.reg).subscribe(t =>{console.log(t);this.ngOnInit()});

  }


  getShip(m)
  {

   this.sref= new Shipment(m.fromPlace, m.toPlace,m.qty, m.wt, m.ppi,(m.wd + "x"+m.ht +"x"+m.len),m.type,m.pref);
  console.log(this.sref);
  this.svc.postShip(this.sref).subscribe(t =>{console.log(t)});

  }


}
