import { Component, OnInit } from '@angular/core';
import {SubmitDetails} from '../submitproperty/submit'
import {AppService} from '../app.services'
@Component({
  selector: 'app-myproperty',
  templateUrl: './myproperty.component.html',
  styleUrls: ['./myproperty.component.css'],
  providers:[AppService]
})
export class MypropertyComponent implements OnInit {
   iproperty:SubmitDetails[]=[];
   iproperty1:SubmitDetails;

   a:any;
  
  submitted:boolean;
  deleted:boolean;
  
     constructor(private service:AppService) { }
  
   ngOnInit():void{
   this.service.getdetail1()
   .subscribe(l1=>{
      this.iproperty=l1
    });
     }
  
  
  edit1(x:number){
  for(var i=0;i<this.iproperty.length;i++)
    {
      if(this.iproperty[i].propid==x)
      {
        this.iproperty1=this.iproperty[i];
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
  
  this.service.update1(y).subscribe(t => {console.log(t);this.ngOnInit()});
  }
  
  
}
