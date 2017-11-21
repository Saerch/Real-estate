import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Signup} from '../signup/signup';
import {Router} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AppService]
})
export class ProfileComponent implements OnInit {
data:Signup[]=[]
sign:Signup
  constructor(private service:AppService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.service.getdetail().subscribe(t => {
      this.data=t
    });

    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
    .subscribe(id => {this.sign = id});
    
  }

  change(s:Signup){
    var s1= new Signup(s.fullname,s.email,this.sign.password,this.sign.stat,s.phone,this.sign.username,this.sign.id)
    this.service.update(s1).subscribe(t => {console.log(t),this.ngOnInit()});
    if(this.sign.stat=="seller"){
      this.router.navigate(['/seller',this.sign.id])
  }
  else{
     this.router.navigate(['/buyer',this.sign.id]); 
  }
    
  }

}
