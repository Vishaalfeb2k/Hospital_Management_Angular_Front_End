import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './services/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [SignupService,LoginService],
  bootstrap: [AppComponent]
})

export class AppModule{ }
