import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private authservice: AuthserviceService, private router: Router) { }

  ngOnInit() {
  }
  signUp() {
    this.authservice.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard'])
      },
      err => { console.log(err) }
    )
  }
}
