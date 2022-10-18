import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/auth/sign-in']);
  }

}
