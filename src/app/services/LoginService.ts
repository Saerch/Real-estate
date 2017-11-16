import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { UserLogin, AdminLogin } from '../Blueprints/Login';

@Injectable()
export class LogService{
    private adminCheckUrl="api/adminLogin";
    private userCheckUrl="api/userLogin";

    constructor(private _http:Http){

    }

    adminCheck(admin:AdminLogin):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
  
        return this._http.post(this.adminCheckUrl, JSON.stringify(admin), opts)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    userCheck(user:UserLogin):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
  
        return this._http.post(this.userCheckUrl, JSON.stringify(user), opts)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}