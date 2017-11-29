import { Component, OnInit } from '@angular/core';
import {SubmitDetails} from '../submitproperty/submit'
import {AppService} from '../app.services'
import {Signup} from '../signup/signup'
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-myproperty',
  templateUrl: './myproperty.component.html',
  styleUrls: ['./myproperty.component.css'],
  providers:[AppService]
})
export class MypropertyComponent implements OnInit {
   iproperty:SubmitDetails[]=[];
   iproperty1:SubmitDetails;
  sign:Signup;
   a:any;
  iproperty2:SubmitDetails[]=[];
  submitted:boolean;
  deleted:boolean;
  id:number;
     constructor(private service:AppService,private route: ActivatedRoute) {
      
      }
  
   ngOnInit():void{
   this.service.getdetail1()
   .subscribe(l1=>{
      this.iproperty=l1;
      this.propertydetail();
    }); 

    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
    .subscribe(id => {this.sign = id;console.log(this.sign.id)});

     }

  propertydetail(){
    var j=0;
    for(var i=0;i<this.iproperty.length;i++){
      if(this.iproperty[i].pd.id===this.sign.id){
        console.log(this.iproperty[i].pd.id);
        this.iproperty2[j]=this.iproperty[i];
        j++;
      }
    }
  }
  
  edit1(x:number){
  for(var i=0;i<this.iproperty2.length;i++)
    {
      this.id=x;
      if(this.iproperty2[i].propId==x)
      {
        this.iproperty1=this.iproperty2[i];
        console.log(this.iproperty2[i]);
      }
    }
  this.a=1;
  }
  
  edit(y){
    console.log(y);
  // let z= new SubmitDetails(y.name,y.email,y.propStatus,y.type,y.rooms,y.bathroom,
  //       y.title,y.price,y.area,y.address,y.postalcode,y.phone,y.info,y.parking,y.ac,y.sit,y.pool,y.window,y.alarm,y.heating,y.gym,y.laundry);
  this.deleted=false;
  this.submitted=true;
 
  this.service.update1(y,this.sign.id).subscribe(t => {console.log(t);this.ngOnInit});
  }
  
  
}
