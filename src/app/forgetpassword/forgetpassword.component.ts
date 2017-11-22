import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services';
import {Router} from '@angular/router';
import {Signup} from '../signup/signup'

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  providers:[AppService]
})
export class ForgetpasswordComponent implements OnInit {
l1:Signup[];
data:Signup;
  otpvalue:String;
  otpmsg:boolean;
  signdata:Signup;
  password:boolean;
  a:boolean;
  email:boolean;
  username:boolean;
  constructor(private service:AppService,private router:Router) { }

  ngOnInit() {
    this.service.getdetail()
    .subscribe(l1=>{
      this.l1=l1
    });
  }
  sendmail(form){
    for(var i=0;i<this.l1.length;i++){
    if(this.l1[i].username==form.username){
      this.username=false;
      this.email=false;
      if(this.l1[i].email==form.email){
        
        this.data=this.l1[i];
        this.service.forgetpassword(this.data).subscribe(t=>{
      this.otpvalue=t.text();console.log(t.text())});
      //console.log(this.otpvalue);
      }
    else{
      this.email=true;
    }
    }
  else{
    this.username=true;
}
  }
  }
  Otpverify(otp){
  console.log("otp verification");
  if(this.otpvalue==otp){
    this.password=true;
   }
else{
this.otpmsg=true;
}
  }
save(password){
  if(password.np==password.cnp){
    this.a=false;
    console.log(this.data.id);
    var signup=new Signup(this.data.fullname,this.data.email,password.np,this.data.stat,this.data.phone,this.data.username);
    console.log(signup.id);
    this.service.update(signup,this.data.id).subscribe(t =>{console.log(t); this.ngOnInit});
  }
  else{
    this.a=true;
  }
}
}
