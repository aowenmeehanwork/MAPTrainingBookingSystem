import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'booking-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn : String;

  constructor(private _router: Router) {
    this.loggedIn = localStorage.getItem('signin');
    console.log(this.loggedIn);
  }


}
