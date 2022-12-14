import { newUsers, User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    private http: HttpClient,
    private injector: Injector
    ) { }

  signup(data: newUsers) {
    const url = environment.apiURL + 'signup'
    return this.http.post<newUsers>(
      url,data
    )
  }

  login(): Observable<User[]> {
    const url = environment.apiURL + 'signup'
    return this.http.get<User[]>(url)
  }
}
