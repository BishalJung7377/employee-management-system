import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { newEmployee } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public apiConst : string = 'employe-datas';
  constructor(
    private http: HttpClient
  ) { }


  deleteUser(employee: any){
    const url = environment.apiURL + this.apiConst + '/' + employee.id;
    return this.http.delete(url)
  }

  getIndividualUser(employee: any){
    const url = environment.apiURL +  this.apiConst + '/' + employee.id;
    return this.http.get(url)
  }

  updateUserInformation(id : number, data: string[]){
    const url = environment.apiURL +  this.apiConst + '/' + id;
    return this.http.put(url, data)
  }

  addNewEmployee(data:newEmployee){
    const url = environment.apiURL +  this.apiConst;
    return this.http.post<newEmployee>(url, data)
  }

}
