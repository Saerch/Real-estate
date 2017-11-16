import { Component, OnInit } from '@angular/core';
declare var $: any;
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';

@Component({
  selector: 'app-superadminsidebar',
  templateUrl: './superadmin-sidebar.component.html',
  styleUrls: ['./superadmin-sidebar.component.css']
})
export class SidebarSuperadminComponent implements OnInit {




 constructor(public superadminsidebar:SidebarSuperadminService ) 
 {
 	this.superadminsidebar.show();
 }



ngOnInit() 
{

	 
}


}
