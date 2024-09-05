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
  user_rec: String = '';
  pass_rec: String = '';

  constructor(private router:Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if(extras?.state){
      this.user_rec = extras?.state['usuario'];
      this.pass_rec = extras?.state['pass'];
      console.log(this.user_rec, this.pass_rec);
    }
  }

  login() {
    this.warningVisible = false;
    this.loadingVisible = true;

    setTimeout(() => {
      if (this.mdl_mail == this.user_rec && this.mdl_pass == this.pass_rec) {
        let extras: NavigationExtras = {
          state: {
            'usuario': this.user_rec,
            'contrasena': this.pass_rec
          },
          replaceUrl: true
        }
                
        this.router.navigate(["inicio"], extras)
      } else {
        this.warningVisible = true;
      }
      this.loadingVisible = false;
    }, 2500);
  }

  registrarse () {
    let extras: NavigationExtras = {

      replaceUrl: true
    }
    
    
    this.router.navigate(["registro"], extras)
  }

}
