import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regDiv=true;
  trackDiv=false;
  trackFoot=false;
  empty="";
  password="";
  cpassword="";
  Arr=[];

 constructor(){
  
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
    console.log(t);
    this.regDiv=false;
    this.trackDiv=true;
  }

}