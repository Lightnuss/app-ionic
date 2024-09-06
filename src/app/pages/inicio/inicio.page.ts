import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user: string = ''
  pass: string = ''
  user_rec: string = ''
  pass_rec: string = ''

  constructor(private router:Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if (extras?.state) {
      this.user_rec = extras?.state['usuario'];
      this.pass_rec = extras?.state['contrasena'];
    }
  }

  login () {
    let extras: NavigationExtras = {
      state: {
      'usuario': this.user_rec,
      'pass': this.pass_rec
      },
      replaceUrl: true
    }        
    this.router.navigate(['login'], extras)
  }

  cambiocontra () {
    let extras: NavigationExtras = {
      state: {
        'usuario': this.user_rec,
        'pass': this.pass_rec
      },
      replaceUrl: true
    }
    this.router.navigate(['cambiopass'], extras);
  }

}
