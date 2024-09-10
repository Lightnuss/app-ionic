import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cambiopass',
  templateUrl: './cambiopass.page.html',
  styleUrls: ['./cambiopass.page.scss'],
})
export class CambiopassPage implements OnInit {
  user: string = ''
  email: string = ''
  confirmar: string = ''
  pass: string = ''
  user_rec: string = ''
  pass_rec: string = ''
  nombre_rec: string = ''
  warningVisible: boolean = false
  warningVisible2: boolean = false
  loadingVisible: boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras
    if (extras?.state) {
      this.nombre_rec = extras?.state['nombre'];
      this.user_rec = extras?.state['usuario'];
      this.pass_rec = extras?.state['pass'];
    }
  }

  cambiopass() {
    
    this.warningVisible = false;
    this.warningVisible2 = false;
    this.loadingVisible = true;
  
    
    if (!this.user || !this.email || !this.pass || !this.confirmar) {
      this.warningVisible2 = true;
      this.loadingVisible = false;
      return;
    }
  
    
    setTimeout(() => {
      if (this.pass === this.confirmar) {
        let extras: NavigationExtras = {
          state: {
            'nombre': this.user,
            'usuario': this.email,
            'pass': this.pass
          },
          replaceUrl: true
        };
        this.router.navigate(['login'], extras);
      } else {
        this.warningVisible = true;
      }
      this.loadingVisible = false;
    }, 2500);
  }

}
