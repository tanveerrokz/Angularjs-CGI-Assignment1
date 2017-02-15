import { Injectable } from '@angular/core';
import  {Observable,Subject} from 'rxjs';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetCarListService {

    private refreshListFlag = new Subject<boolean>();
  refreshList$ = this.refreshListFlag.asObservable();

  constructor(public httpSvc: Http) {}
   
   
    getCarList():Observable <any>{
      return this.httpSvc.get("/app/api/CarList.json")
  .map((response)=>    response.json()    )
  .catch((error) => Observable.throw(error.json()));
    }

  refreshList(flag : boolean){
       this.refreshListFlag.next(flag);
    }

   }


