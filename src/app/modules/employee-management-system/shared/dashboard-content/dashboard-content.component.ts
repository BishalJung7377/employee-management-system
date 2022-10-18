import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  public averageSalary : string = '0';
  public averageWorkinghours : string = '0';
  public totalUsers : number = 0;
  public totalEmployee : string = "0";
  constructor(
    private authData : AuthService,
  ) { }

  ngOnInit(): void {
    this.getUserCount();
  }

  salaryEventHander($event: string): void{
    this.averageSalary = $event; 
  }

  workHrsEventHander($event : string): void{
   this.averageWorkinghours = $event; 
  }

  employeeEventHandler($event : string): void{
    this.totalEmployee = $event;
  }

  getUserCount(): void{
    this.authData.login().subscribe(
      res => {
       this.totalUsers = res.length;
      }
    )
  }

}
