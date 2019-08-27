import { AuthserviceService } from './authservice.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private authservice : AuthserviceService, private router : Router ){}

  canActivate():boolean{
    if(this.authservice.loggedIn()){
      return true;
    }else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
