export class SubmitDetails
{   propid:number;
    title:String;
    propStatus:String;
    type:String;
    price:number;
    area:number;
    rooms:number;
    bathroom:number;
    address:String;
    postalcode:number;
    info:String;
    
    name:String;
    email:String;
    phone:number;
   //userid:number;
constructor(name,email,propStatus,type,rooms,bathroom,
        title,price,area,address,postalcode,phone,info)
        {
            this.name=name;
            this.email=email;
            this.propStatus=propStatus;
            this.type=type;
            this.rooms=rooms;
            this.bathroom=bathroom;
            this.title=title;
            this.price=price;
            this.area=area;
            this.address=address;
            this.postalcode=postalcode;
            this.phone=phone;
            this.info=info;

}
}