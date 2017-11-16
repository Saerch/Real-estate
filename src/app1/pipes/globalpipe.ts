import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'adId'})
export class Pipe1 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => t.AdminId.toLowerCase().match(val.toLowerCase()));
    }
}

@Pipe({name: 'adLoc'})
export class Pipe2 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => t.AdminLocation.toLowerCase().match(val.toLowerCase()));
    }
}

@Pipe({name: 'id'})
export class Pipe3 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t =>((t.Uid.toString()).match(val)));
    }
}

@Pipe({name: 'Uname'})
export class Pipe4 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => (t.Fname+t.Lname).toLowerCase().match(val.toLowerCase()));
    }
}

@Pipe({name: 'Lnam'})
export class Pipe5 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => t.Lname.toLowerCase().match(val.toLowerCase()));
    }
}
@Pipe({name: 'Fnam'})
export class Pipe6 implements PipeTransform
{
    transform(Arr:any[], val:string): any[]
    {
        return Arr.filter(t => t.Fname.toLowerCase().match(val.toLowerCase()));
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
}



