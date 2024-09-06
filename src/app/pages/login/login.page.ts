import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = '';
  pass: string = '';
  warningVisible: boolean = false;
  loadingVisible: boolean = false;
  user_rec: string = '';
  pass_rec: string = '';

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

    if (!this.user || !this.pass) {
      this.warningVisible = true;
      this.loadingVisible = false;
      return;
    }

    setTimeout(() => {
      if (this.user == this.user_rec && this.pass == this.pass_rec) {
        let extras: NavigationExtras = {
          state: {
            'usuario': this.user_rec,
            'contrasena': this.pass_rec
          },
          replaceUrl: true
        }
                
        this.router.navigate(['inicio'], extras)
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
        
    this.router.navigate(['registro'], extras)
  }

}
