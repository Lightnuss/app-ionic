import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_mail: String = '';
  mdl_pass: String = '';
  warningVisible: boolean = false;
  loadingVisible: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.warningVisible = false;
    this.loadingVisible = true;

    setTimeout(() => {
      if (this.mdl_mail == "admin" && this.mdl_pass == "admin") {
        let extras: NavigationExtras = {
          state: {
            'usuario': this.mdl_mail,
            'contrasena': this.mdl_pass
          }
        },
        replaceUrl = true;
  
        this.router.navigate(["inicio"], extras)
      } else {
        this.warningVisible = true;
      }
      this.loadingVisible = false;
    }, 2500);
  }

  registrarse () {
    this.router.navigate(['registro'])
  }

}
