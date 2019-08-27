import { MessageService } from './../message.service';
import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private authservice: AuthserviceService,private router : Router, private messageservice : MessageService) { }

  ngOnInit() {
  }
  logIn() {
    this.authservice.loginUser(this.loginUserData).subscribe(
      res => { console.log(res) 
      localStorage.setItem('token',res.token)
      this.router.navigate(['/dashboard'])
    this.messageservice.showSuccessMessage('success')},      
      err => { console.log(err) 
      this.messageservice.showErrorMessage(err.error)}
    )
  }
}
