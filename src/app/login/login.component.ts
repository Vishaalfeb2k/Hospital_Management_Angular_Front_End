import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import {first} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';
import {LoginService} from '../services/login.service';
export class login{

  public emailid:String;
  public password:String;
constructor(emailid:String,password:String){this.emailid=emailid,this.password=password}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVar:login=new login("","");
  
  form1:FormGroup=new FormGroup({});
  
  loggin=false;
  hide=true;
  showSpinner='';
  constructor(private router:Router,private formBuilder:FormBuilder,private route:ActivatedRoute,private service:LoginService)
  {this.emailid='',this.password='',this.hide=true}

  emailid : String;
  password : String;
  
  ngOnInit(): void {
    this.form1=new FormGroup({
      emailid:new  FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.required,Validators.minLength(6)]),
     }); 
  }
  get f(){
     return this.form1.controls;
   }

  login(){
    this.loggin=true;
  console.log("login");
 
   this.service.getLoginData(this.form1.value).subscribe(
     
     data1 =>{
       console.log("hi");
         console.log(data1);
         if(data1)
         {
         console.log("user page!!!!!");
         this.router.navigate(['user']);
         }
       }
       
     
   )
   
   

//   if(this.emailid=='vishaalfeb2000@gmail.com' && this.password=='password')
//   {
//     console.log("if");
//     this.router.navigate(['user']);
//   }
//   else
//   {
//     alert("Invalid Credentials");
//   }
}
}

