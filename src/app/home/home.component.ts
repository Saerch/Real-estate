import { Component, OnInit } from '@angular/core';
import { SubmitDetails } from '../submitproperty/submit';
import {AppService} from '../app.services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppService]
})
export class HomeComponent implements OnInit {
  property:SubmitDetails[]=[];
  constructor(private service:AppService) { }

  ngOnInit() {
    this.service.getdetail1().subscribe(t => {this.property=t});
  }

}
