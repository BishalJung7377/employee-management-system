import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient,
   ) { }

   getChartInfo(){
    const url = environment.baseurl + 'employe-datas'
    return this.http.get<UserData[]>(url)
   }

   getPieChartData(){
    const url = environment.baseurl + 'workinghours'
    return this.http.get(url)
   }
   
}
