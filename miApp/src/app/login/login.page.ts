import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    nombre: '',
    pass: '',
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async login() {

    localStorage.setItem('ingresado', 'true');

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
      },
    }
    this.router.navigate(['/home']);
  }


}
