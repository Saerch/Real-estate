import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services'
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Signup} from '../signup/signup'
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers:[AppService]
})
export class MyprofileComponent implements OnInit {
sign:Signup;
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
