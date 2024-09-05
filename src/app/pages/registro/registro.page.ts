import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: String = ''
  pass: String = ''


  constructor(private router: Router){ }

  ngOnInit() {
  }

  registro (){
    let extras : NavigationExtras = {
      state: {
        'usuario': this.user,
        'pass': this.pass
      },
      replaceUrl: true
    }
    console.log(this.user, this.pass);
    this.router.navigate(['login'], extras);
  }


}
