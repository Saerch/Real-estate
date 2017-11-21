import { Component, OnInit } from '@angular/core';
import {Signup} from '../signup/signup'
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Router} from '@angular/router';
import {AppService} from '../app.services';
import {Password} from './password'
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers:[AppService]
})
export class PasswordComponent implements OnInit {
data:Signup[]=[];
sign:Signup
flag:boolean=false;
message:string;
valid:boolean=true;
a:boolean;
b:boolean;
  constructor(private service:AppService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.service.getdetail().subscribe(t => {
      this.data=t
    });

    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
    .subscribe(id => {this.sign = id});
  }
  save(s:Password)
  {   console.log(s.cp);
      console.log(s.np);
      console.log(s.cnp);
    if(s.cp===this.sign.password)
    {
          if(s.np==s.cnp)
          {      let s1=new Signup(this.sign.fullname,this.sign.email,s.np,this.sign.stat,this.sign.phone,this.sign.username,this.sign.id)
                  this.service.update(s1).subscribe(t => {console.log(t),this.ngOnInit()});  
                  this.router.navigate(['/seller',this.sign.id])

          }
          else
          { 
            this.b=false;   
            this.a=true;
          }
    }
    else
    { 
      this.a=false;
       this.b=true;
    }
  }
  
  // matchpass:any;
  
  // myfun(pass:any)
  // {
  //   this.matchpass = pass;
  // }
  // match(confirmpassword)
  // {
    
  //   if(this.matchpass.value!=confirmpassword.value)
  //   {   this.flag=true;
  //     this.message="password mismatch...";
  //     this.valid=false;
  //   }
  //   else
  //   {this.flag=false;
  //     this.valid=true;
  //   }
  // }
}
