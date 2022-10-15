import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private http: HttpClient,
    private injector: Injector
   ) { }

   getChartInfo(){
    const url = environment.apiURL + 'employe-datas'
    return this.http.get(url,)
   }

   getPieChartData(){
    const url = environment.apiURL + 'workinghours'
    return this.http.get(url)
   }
   
}
