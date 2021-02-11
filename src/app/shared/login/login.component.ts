import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// dependancy injection is used in the constructor
  constructor(public formBuilder: FormBuilder,
    public apiService: DataService,
    private router: Router,
    private route: ActivatedRoute) { }
  loginForm : any ;
  
  submitted = false;
 
  isLogin = true;
  
  loginError = false ;
  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  //long methods are avoided
  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.customerlogin();
    
}

customerlogin() {

  const url = `auth/login`;
  const method = `POST`;
  const data = {
    "username": this.loginForm.value.userName,
    "password": this.loginForm.value.password
  };
 

  this.apiService.customerLogin(url,method,data,null).then(async rsp => {
    console.log(rsp)
    if (rsp) {
      if(rsp.data?.user == false){
        localStorage.removeItem('vlc_user_token');
        this.loginError = true;
  
      }

      if(rsp?.auth == true){
        localStorage.setItem('vlc_user_token',rsp.token);
        this.loginError = false;
        this.router.navigate(['/home']);
  
      }

    }else{
      localStorage.removeItem('vlc_user_token');
      this.loginError = true;
    }

  }).catch(err => {
    console.log(err);
    localStorage.removeItem('vlc_user_token');
    this.loginError = true;
  });

}

}


//lazy loading in module is implemented
//components are created as small reusable components
//long methods are avoided-short methods are used
// DRY concept is used----apiService.customerLogin is written as common in data.services
// Adding caching mechanisms----eg: token which is not changing is cached for later use
//  Angular CLI is a command-line interface tool that is used to initialize, 
// develop, scaffold, maintain and even test and debug Angular applications.
// dependancy injection is used in the constructor
// module organisation is done more maintainable, readable and reusable and we are able to use the lazy-loading feature.
// components are created using ----> ng generate module shared/login --route "" --module app.module    in cmd
// used a separate routing module for the router eg:login-routing.module.ts,home-routing.module.ts
// shared module is created----https://www.pluralsight.com/guides/using-shared-modules-in-angular