import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {login} from '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getLoginData(form1:any)
  {
    return this.http.post<login>('http://localhost:9191/login',form1,{responseType:'text' as 'json'})
  }
}
