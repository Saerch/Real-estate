import { Component,EventEmitter,Output} from '@angular/core';
import {SubmitDetails}from './submit'
import {AppService} from '../app.services';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Signup} from '../signup/signup'
import{Router} from '@angular/router';

@Component({
  selector: 'app-submitproperty',
  templateUrl: './submitproperty.component.html',
  styleUrls: ['./submitproperty.component.css' ,
  './../../../node_modules/bootstrap/dist/css/bootstrap.css'],
  providers:[AppService]
})
export class SubmitpropertyComponent{
sign:Signup;
j:boolean;
prop:SubmitDetails;
data:SubmitDetails[];
  constructor(private service:AppService,private route: ActivatedRoute,private router:Router) {
    
}
  ngOnInit(){
    this.service.checkcredentials();

    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
    .subscribe(id => {this.sign = id});

    this.service.getdetail1().subscribe(t => { this.data=t});
  }


newSub(a){
  console.log(a);
  console.log(this.sign.id);
  this.prop=new SubmitDetails(a.title,a.propStatus,a.type,a.price,a.area,a.rooms,a.bathroom,a.address,a.postalcode,a.info,a.name,a.email,a.phone,a.parking,a.ac,
    a.balcony,a.pool,a.storage,a.gaspipe,a.alarm,a.pooja,a.laundry,a.city,a.state,a.buildingage,a.floor,a.noofparking,a.furnished,a.view)
        console.log(this.prop); 
       this.service.post1(this.prop,this.sign.id).subscribe(t => {console.log(t.text());this.ngOnInit});
        this.router.navigate(['/seller',this.sign.id]);

}
}

