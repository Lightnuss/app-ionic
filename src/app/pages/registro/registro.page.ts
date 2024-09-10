import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: string = ''
  email: string = ''
  pass: string = ''
  warningVisible: boolean = false;
  loadingVisible: boolean = false;

  constructor(private router: Router){ }

  ngOnInit() {
  }

  registro (){

    this.loadingVisible = true;

    setTimeout(() => {
    if (this.email && this.pass && this.user) {
      let extras : NavigationExtras = {
        state: {
          'nombre' : this.user,
          'usuario': this.email,
          'pass': this.pass
        },
        replaceUrl: true
      }
      this.router.navigate(['login'], extras);
    } else {
      this.warningVisible = true
    }
    this.loadingVisible = false;
    }, 2500);
    
  }

  redireccion() {
    let extras: NavigationExtras = {

      replaceUrl: true
    }
        
    this.router.navigate(['login'])
  }

}
