import { AuthserviceService } from './../../authservice.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthserviceService , private router : Router) { }

  ngOnInit() {
  }
  @Output() toggleSidenav = new EventEmitter();
  @Output() closeSidenav = new EventEmitter();
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
