import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  public averageSalary : string = '';
  public averageWorkinghours : string = '';
  public totalUsers : number = 0;
  constructor(
    private authData : AuthService,
  ) { }

  ngOnInit(): void {
    this.getUserCount();
  }

  salaryEventHander($event: string){
    this.averageSalary = $event; 
  }
  workHrsEventHander($event : string){
   this.averageWorkinghours = $event; 
  }

  getUserCount(){
    this.authData.login().subscribe(
      res => {
       this.totalUsers = res.length;
      }
    )
  }
}
