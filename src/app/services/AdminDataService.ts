import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Admin_class } from '../Blueprints/aDmin';

@Injectable()
export class DataAdminService
{
   private get_admin_Url='api/showadmins';
   private post_admin_Url='api/newadmin';
   private Update_admin_Url='api/upAdmin/';
   private Delete_admin_Url='api/delAdmin/';

   constructor(private _http:Http){}

   getAdvals(): Observable<any[]>{
      return (this._http.get(this.get_admin_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
   }

   postAdmin(nAdmin:Admin_class): Observable<Admin_class>
   {
       let headers = new Headers({'Content-Type':'application/json'});
       let opts = new RequestOptions({headers : headers});
       return (this._http.post(this.post_admin_Url, JSON.stringify(nAdmin), opts)
               .map(this.extractData)
                .catch(this.handleError));            
   }

   DelAdminById(t:number):Observable<Admin_class>
    {
        return this._http.delete("api/delAdmin/"+t.toString())
           .map(() => null)
           .catch(this.handleError);
    }

   UpdateAdmin(uAdmin:Admin_class, x:number):Observable<Admin_class>
    {
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
        return this._http.put("api/upAdmin/"+x.toString(),JSON.stringify(uAdmin),opts)
                .map(() => uAdmin)
                .catch(this.handleError);
    }

    AdminAccess(id:number, stat:Boolean):Observable<Response>{
        return this._http.get("api/permitAdmin/"+id.toString()+"/"+stat)
           .map((res:Response) => res)
           .catch(this.handleError);
    }

    GetAdminById(id:number):Observable<Admin_class>{
        return this._http.get("api/getAdminObj/"+id.toString())
        .map( (res:Response) => <Admin_class> res.json() )
        .catch(this.handleError);
    }

    ChangeAdminPass(id:string, newPass):Observable<Response>{
        return this._http.get("api/chAdminPass/"+id+"/"+newPass)
            .map((res:Response) => res)
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