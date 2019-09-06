import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'booking-system-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: String;

  @Input() public newUser: User;
  data: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;

    // Add a key to maintain session
    localStorage.setItem('signin', 'none');
  }

  login(loginForm): void {
    var userPromise = this.data.getUser(this.newUser);
    var _this = this;
    userPromise.then(function(result) {
        const md5 = new Md5();
        var password = "";
        if (_this.newUser.Password != null) {
            password = md5.appendStr(_this.newUser.Password).end().toString();
        }
        if (result != null && _this.newUser.Email == result.Email &&
            password == result.Password) {
            localStorage.setItem('signin', result.Email);
            _this.message = "";
            window.location.href = '/kainos-employee';
        } else {
            _this.message = 'Invalid email or password';
        }
    });
  }

  ngOnInit() {
    this.newUser = new User();
  }
}
