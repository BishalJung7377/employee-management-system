import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management-system';
  constructor(private apiService: AuthService, private router: Router) {
    if (this.apiService.isUserLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }
}
