import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private injector: Injector) { }

  login(): Observable<User[]> {
    const url = environment.apiURL + 'login'
    return this.http.get<User[]>(url)
  }
}
