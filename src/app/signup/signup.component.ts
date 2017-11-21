import { Component, OnInit } from '@angular/core';
import {Signup} from './signup';
import {AppService} from '../app.services'
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AppService]
})
export class SignupComponent implements OnInit {
  flag:boolean=false;
  signdata:Signup;
  message:string;
  i:number;
  valid:boolean;
  l1:Signup[]=[];
  a:boolean;
  b:boolean;
  otpvalue:String;
  otpmsg:boolean;
  constructor(private service:AppService,private router:Router) { }

  ngOnInit() {
    this.service.getdetail()
    .subscribe(l1=>{
      this.l1=l1
    });
  }

  signup(f:Signup, y:String,z:String){
    if(f.password===z){
      console.log("password match")
      this.a=false;
      this.b=false;
      this.signdata= new Signup(f.fullname,f.email,f.password,y,f.phone,f.username);
      console.log("sending otp.....")
      this.service.callotp(this.signdata).subscribe(t=>{
      this.otpvalue=t.text()});
        console.log(this.otpvalue);
    console.log("otp send")
      console.log("logged in");
    }
   else{
     this.a=true;
   }
  }
checkUsername(a){
  for(var i=0;i<this.l1.length;i++){
    if(this.l1[i].username==a){
      this.b=true;
    }
  }
}
Otpverify(otp){
  console.log("otp verification");
  if(this.otpvalue==otp){
      this.service.post(this.signdata).subscribe(t =>{console.log(t), this.ngOnInit});
      this.router.navigate(['/Login']);
  }
else{
 this.otpmsg=true;
}

   }
}

