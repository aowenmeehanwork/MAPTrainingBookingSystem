import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'booking-system-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: String;
  constructor(private router: Router) {
    if (localStorage.getItem('signin') == 'none') {
        this.login = 'Log in';
    } else {
        this.login = 'Log off';
    }
  }

  ngOnInit() {
  }

  userLogin(): void {
    if (localStorage.getItem('signin') == 'none') {
        this.login = 'Log in';
        window.location.reload();
    } else {
        this.login = 'Log off';
        localStorage.setItem('signin', 'none');
        window.location.href = '/';
    }
  }

}
