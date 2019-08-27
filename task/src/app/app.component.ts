import { AuthserviceService } from './authservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  opened = false;

  constructor(private authService : AuthserviceService){}
}
