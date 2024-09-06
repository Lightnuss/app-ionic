import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: string = ''
  pass: string = ''
  warningVisible: boolean = false;

  constructor(private router: Router){ }

  ngOnInit() {
  }

  registro (){
    if (this.user && this.pass) {
      let extras : NavigationExtras = {
        state: {
          'usuario': this.user,
          'pass': this.pass
        },
        replaceUrl: true
      }
      this.router.navigate(['login'], extras);
    } else {
      this.warningVisible = true
    }
    
  }


}
