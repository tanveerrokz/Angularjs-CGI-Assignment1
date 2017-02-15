import { Component, OnInit,Input } from '@angular/core';
import {GetCarListService} from 'app/Services/get-car-list.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

appFetchDataSvc : GetCarListService;
carListJSON : any;
order:boolean = true;
dispMake:any;
dispModel:any;
dispYear: any;
dispStatus: any;
dispDescription: any;

  item :any;
  @Input() sort: any;

  constructor( carlistSrv : GetCarListService) { 
    this.appFetchDataSvc = carlistSrv;
    this.getDataFromServer(carlistSrv);
  }

ngOnInit() {
  }
clicked(event) {
  this.dispMake = this.carListJSON[event].make;
  this.dispModel = this.carListJSON[event].model;
  this.dispYear = this.carListJSON[event].year;
  this.dispStatus = this.carListJSON[event].status;
  this.dispDescription = this.carListJSON[event].description;
  }

getDataFromServer(appFetchDataSvc : GetCarListService){
    appFetchDataSvc.getCarList().subscribe((result) => {console.log(this.carListJSON = result.vehicles)},
    error => {
      console.log("ERROR in code");
    });
  } 

sortList(colName): void{
  this.order = !this.order;
  console.log("sorting is called");
  this.carListJSON.sort(sortByProperty(colName,this.order));
  console.log(this.carListJSON);
  
} 
}


var sortByProperty =  function (property,order){
 return function (x, y) { 
  if (order == true)
  {
return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? -1 : 1));
  }
  else {
return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
  }
 };
};