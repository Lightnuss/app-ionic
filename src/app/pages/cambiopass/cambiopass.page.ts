import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cambiopass',
  templateUrl: './cambiopass.page.html',
  styleUrls: ['./cambiopass.page.scss'],
})
export class CambiopassPage implements OnInit {
  user: string = ''
  confirmar: string = ''
  pass: string = ''
  user_rec: string = ''
  pass_rec: string = ''
  warningVisible: boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if (extras?.state) {
      this.user_rec = extras?.state['usuario'];
      this.pass_rec = extras?.state['pass'];
    }
  }

  cambiopass() {
    if (this.pass == this.confirmar) {
      let extras: NavigationExtras = {
        state: {
          'usuario' : this.user,
          'pass' : this.pass
        },
        replaceUrl: true
      }
      this.router.navigate(['login'], extras)
    } else {
      this.warningVisible = true;
    }
  }



}
