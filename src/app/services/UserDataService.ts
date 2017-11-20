import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {User_class} from '../Blueprints/uSer';

@Injectable()
export class DataUserService
{
    private get_users_Url='api/showusers';
    private post_user_Url='api/newuser';
    private Update_user_Url='api/upUser/';
    private Delete_user_Url='api/delUser/';


    constructor(private _http:Http){}

    getUvals(): Observable<any[]>{
      return (this._http.get(this.get_users_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
   }

   postUser(nUser:User_class): Observable<Response>
   {
       let headers = new Headers({'Content-Type':'application/json'});
       let opts = new RequestOptions({headers : headers});
       return (this._http.post(this.post_user_Url, JSON.stringify(nUser), opts)
               .map( (res:Response) => res )
                .catch(this.handleError));            
   }

   DelUserById(t:number):Observable<User_class>
    {
        return this._http.delete(this.Delete_user_Url+t.toString())
           .map(() => null)
           .catch(this.handleError);
    }

   UpdateUser(upuSer:User_class, x:number):Observable<User_class>
    {
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
        return this._http.put(this.Update_user_Url+x.toString(),JSON.stringify(upuSer),opts)
                .map(() => upuSer)
                .catch(this.handleError);
    }

    UserAccess(id:number, stat:Boolean):Observable<Response>{
        return this._http.get("api/permitUser/"+id.toString()+"/"+stat)
           .map((res:Response) => res)
           .catch(this.handleError);
    }

    GetUserById(id:number):Observable<User_class>{
        return this._http.get("api/getUserObj/"+id.toString())
        .map( (res:Response) => <User_class> res.json() )
        .catch(this.handleError);
    }

    GetMaxUser():Observable<Response>{
        return this._http.get("api/getMaxUser")
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    GenerateOTP(mob:string):Observable<Response>{
        return this._http.get("api/OTP_generate/"+mob)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    ChangeUserPass(id:number, pass:string):Observable<Response>{
        return this._http.get("api/chUserPass/"+id.toString()+"/"+pass)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    private extractData(res: Response) {
    let body = res.json();
            return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}
