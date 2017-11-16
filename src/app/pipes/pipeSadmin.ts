import {Pipe, PipeTransform} from '@angular/core';


//Admin Pipes
@Pipe({name: 'adminPipe'})
export class adminPipe implements PipeTransform
{
    transform(Arr:any[], sT1:string, sT2:string): any[]
    {
        return Arr.filter(t => t.adminId.toString().startsWith(sT1) &&
                            t.admincity.toLowerCase().match(sT2.toLowerCase()));
    }    
}
    

//User Pipe
@Pipe({name: 'userPipe'})
export class userPipe implements PipeTransform
{
    transform(items:any[],  sT1: string, sT2:string,sT3:string, sT4:string): any[]
    {
        return items.filter(s => s.userId.toString().startsWith(sT1) && (s.userFname+" "+s.userLname).toLowerCase().match(sT2.toLowerCase()) 
                &&  s.userMail.toLowerCase().match(sT3.toLowerCase()));
    }
}
/*
@Pipe({name: 'Uname'})
export class Pipe4 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => (t.Fname+t.Lname).toLowerCase().match(val.toLowerCase()));
    }
}

@Pipe({name: 'Umail'})
export class Pipe7 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => t.Email.toLowerCase().match(val.toLowerCase()));
    }
}
@Pipe({name: 'Uadd'})
export class Pipe8 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => t.Add.toLowerCase().match(val.toLowerCase()));
    }
}*/



