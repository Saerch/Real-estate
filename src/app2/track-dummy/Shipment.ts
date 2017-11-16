export class Shipment
{
	
  consid:number;
  fromPlace:string;
  toPlace:string;
  qty:number;
  wt:number;
  ppi:number;
  specf:string;
  type:string;
  pref:string;


  constructor(fromPlace:string,toPlace:string,qty:number,wt:number,ppi:number,specf:string,type:string,pref:string)
  {

  this.fromPlace=fromPlace;
  this.toPlace=toPlace;
  this.qty=qty;
  this.wt=wt;
  this.ppi=ppi;
  this.specf=specf;
  this.type=type;
  this.pref=pref;

   }
}