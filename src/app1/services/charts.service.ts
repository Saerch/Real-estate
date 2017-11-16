import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IDataChart } from './data-charts';

@Injectable()
export class ChartsService {

 constructor(private _http:Http){ }
  
   getData(): Observable<IDataChart[]>{
        //return this._http.get('https://api.myjson.com/bins/ywavt')
       return this._http.get('assets/data/charts.json')
            .map((res:Response) => <IDataChart[]> res.json())
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE
            .catch(this.handleError);
    }
    
     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
