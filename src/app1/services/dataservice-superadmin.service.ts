import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataserviceSuperadminService {

   private admin_jrl='assets/data/admin.json';
   private user_jrl='assets/data/users.json';
   private cour_jrl='assets/data/courier.json';
   private pyts_jrl='assets/data/payments.json';
   private mrl='http://localhost:8090/admin/showadmins';

   constructor(private _http: Http){}

  getAdvals(): Observable<any[]>{
      return (this._http.get(this.admin_jrl)
      .map((response: Response) => <any[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError));
   }

   getUvals(): Observable<any[]>{
      return (this._http.get(this.user_jrl)
      .map((response: Response) => <any[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError));
   }

   getCorVals(): Observable<any[]>{
      return (this._http.get(this.cour_jrl)
      .map((response: Response) => <any[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError));
   }

   getPyVals(): Observable<any[]>{
      return (this._http.get(this.pyts_jrl)
      .map((response: Response) => <any[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError));
   }

   getDbVals(): Observable<any[]>{
      return (this._http.get(this.mrl)
      .map((response: Response) => <any[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError));
   }

   private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error());
   }

}
