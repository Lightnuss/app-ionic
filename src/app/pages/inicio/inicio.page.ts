import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user: String = ''
  pass: String = ''

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login () {
    let extras: NavigationExtras = {
      state: {
      'usuario': this.user,
      'pass': this.pass
      },
      replaceUrl: true
    }
    
    
    this.router.navigate(["login"], extras)
  }


}
