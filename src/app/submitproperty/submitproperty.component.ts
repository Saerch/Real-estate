import { Component,EventEmitter,Output} from '@angular/core';
import {SubmitDetails}from './submit'
import {AppService} from '../app.services';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Signup} from '../signup/signup'
import{Router} from '@angular/router';
import {feature} from './feature';

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
feature:feature;
  constructor(private service:AppService,private route: ActivatedRoute,private router:Router) {
    
}
  ngOnInit(){
    this.service.checkcredentials();

    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
    .subscribe(id => {this.sign = id});

    this.service.getdetail1().subscribe(t => { this.data=t});
  }
 
// get(title1,status1,type1,price1,area1,rooms1,bathroom1,parking1,ac1,sit1,pool1,laundry1,window1,heating1,alarm1,gym1,address1,city1,postalcode1,state1,info1,buildingage1,bedrooms1,name1,email1,phone1){
//   let x=new SubmitDetails(name1,email1,status1,type1,rooms1,bathroom1,buildingage1,title1,price1,area1,address1,postalcode1,phone1,info1,parking1,ac1,sit1,pool1,window1,alarm1,heating1,gym1,bedrooms1,laundry1)
//   this.service.post1(x,this.sign.id).subscribe(t => {console.log(t),this.ngOnInit});
// }



newSub(a){
  console.log(a);
  console.log(this.sign.id);
  this.prop=new SubmitDetails(a.name,a.email,a.propStatus,a.type,a.rooms,a.bathroom,
         a.title,a.price,a.area,a.address,a.postalcode,a.phone,a.info)
  
        this.feature= new feature(a.parking,a.ac,a.sit,a.pool,a.window,a.alarm,a.heating,a.gym,a.laundry,)
        console.log(a.prop);
        console.log(this.feature); 
        this.service.post1(this.prop,this.feature,this.sign.id).subscribe(t => {console.log(t.text()),this.ngOnInit});
  this.router.navigate(['/seller',this.sign.id]);

}
}

