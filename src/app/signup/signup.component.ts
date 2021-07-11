import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import {first} from 'rxjs/operators';
//import {AccountService,AlertService} from '@app/_services';
import {MatDialog} from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';
import {SignupService} from '../services/signup.service';
export class signup {
  
 
 public id :number;
 public name :String;
 public password :String;
 public emailid :String;
 public phoneno :number;
 constructor(id:number,name:String,password:String,emailid:String,phoneno:number){this.id=id,this.name=name,this.password=password,this.emailid=emailid,this.phoneno=phoneno}
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupVar:signup=new signup(0,"","","",0);
  form:FormGroup=new FormGroup({});
  loading=false;
  submitted=false;
  hide=true;
  showSpinner='';

  constructor(private router:Router,private formBuilder :FormBuilder,private route:ActivatedRoute,private service : SignupService ) 
  {this.name='',this.password='',this.emailid='',this.phoneno='',this.hide=true}


  name : String;
  password : String;
  emailid  : String;
  phoneno  : String;
   
    

  ngOnInit(): void {
    this.form=new FormGroup({
     
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.required,Validators.minLength(6)]),
      emailid:new  FormControl('',[Validators.required,Validators.email]),
      phoneno:new  FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    });
  }
 
   get f(){
     return this.form.controls;
   }
   submit(){
     console.log("submit");
    // console.log(this.form.value);
     this.submitted=true;

     this.service.putSignupData(this.form.value).subscribe(
       data =>{
         console.log(data);
       }
     )
     if(this.form.invalid)
     {
       alert("inavlid");
       console.log(this.form.controls)
       return;
     }
     this.router.navigate(['login'])    }
    //  this.loading=true;
     
    //this.accountService.register(this.form.value)
    // .pipe(first())
    // .subscribe(
    //   {
    //     next:()=>{
    //       this.alertService.success('Registration Successful',{keepAfterRouteChange:true});
  //         this.router.navigate(['login'],{relativeTo:this.route});
  //       }
  //       error:error=>{
  //         this.alertService.error(error);
  //         this.loading=false;
  //       }
  //     }
  //   )

  //  }
}
