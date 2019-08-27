import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  @Output() closeSidenav = new EventEmitter();
  goToDashboard() {
    this.closeSidenav.emit()
    this.router.navigate(['/dashboard']);
  }
  goToStudent() {
    this.closeSidenav.emit()
    this.router.navigate(['/student']);
  }
}
