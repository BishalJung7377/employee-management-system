import { newUsers, User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public userData: any;

  constructor(
    private http: HttpClient,
    private injector: Injector
  ) { }

  isUserLoggedIn() {
    return !!localStorage.getItem('token');
  }

  signup(data: newUsers) {
    const url = environment.baseurl + 'signup'
    return this.http.post<newUsers>(
      url, data
    )
  }

  login(): Observable<User[]> {
    const url = environment.baseurl + 'signup'
    return this.http.get<User[]>(url)
  }

}
