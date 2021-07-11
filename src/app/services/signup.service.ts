import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  putSignupData(form:any)
  {
   return this.http.post<signup>('http://localhost:9191/signup',form,{responseType:'text' as 'json'}) 
  }
}
