import { Component, OnInit } from '@angular/core';
import { HhtpHandlerService } from 'src/app/core/services/hhtp-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public loaderService : HhtpHandlerService,
  ) { }

  ngOnInit(): void {
  }

}
