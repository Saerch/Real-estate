import { Component, OnInit,Input } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { Observable } from 'rxjs';
import {BrowserModule} from '@angular/platform-browser'
import {ChartsModule, Color} from 'ng2-charts';
import { Http, Response, HttpModule, JsonpModule  } from '@angular/http';
import { ChartsService } from '../../../services/charts.service';
import { IDataChart } from '../../../services/data-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './superadmin-dashboard.component.html',
  styleUrls: ['./superadmin-dashboard.component.css'],

})
export class DashboardSuperadminComponent implements OnInit {




constructor
(
public navbaruser:NavbarUserService,
public superadminsidebar:SidebarSuperadminService,
public adminsidebar: SidebarAdminService,
private dataService: ChartsService
)
{
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
}




/*
  chartType:string;
  configData:any;
  barDataJson:any;
   barTypeName:string;
   */
/*

public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    
  }

*/


 // Pie


 public chartColors: any[] = [
      { 
        backgroundColor:["#FF7360", "#6FC8CE", "#39F", "#9C0","#39F","#57bcca", "#9476c5", "#95c837"] 
      }];

      /*
public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

*/




  pieChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  pieChartLabels: string[] =[];
 // barChartType: string = 'horizontalBar';
 pieChartType: string = 'pie';
  pieChartLegend: boolean = true;
  pieChartData: any[] =[];



    barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] =[];
 // barChartType: string = 'horizontalBar';
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any[] =[];




  resultData: IDataChart[] =[];
  loaded = false;
  
//loaded for top bar labels

  getData(){
    this.dataService.getData().subscribe(data => {


      this.resultData = data;
      this.pieChartLabels = this.resultData.map(item => item.label);
      this.pieChartData = this.resultData.map(item => item.data);

      this.barChartLabels = this.resultData.map(item => item.label);
      this.barChartData = this.resultData.map(item => item.data);


      this.loaded = true;

    }
    )
  }
  
  ngOnInit() {
    this.getData();
  }


  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 




 



}
