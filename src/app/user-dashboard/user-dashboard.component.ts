import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services'
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Signup} from '../signup/signup'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers:[AppService]
})
export class UserDashboardComponent implements OnInit {
sign:Signup;
y:number
  constructor(private service:AppService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.checkcredentials();
    
    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
    .subscribe(id => {this.sign = id});
    
  }

  logout(){
    this.service.logout();
  }
}
