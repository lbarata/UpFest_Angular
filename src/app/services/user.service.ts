import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dadosUser: string[] = [];

  constructor(private router: Router) { }

  saveNome(nome : string) {
    this.dadosUser.push(nome);
    console.log(this.dadosUser)
  }

  saveEmail(email: string) {
    this.dadosUser.push(email);
    console.log(this.dadosUser)
  }


  loginUser(nome : string, email: string) {

    // Verificar se o existem dados para ser feeito o login
    if (!!nome && !!email) {

      // V erificar se o email tem um formato certo
      const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailFormat.test(email)) {
        this.saveNome(nome);
        this.saveEmail(email);
        this.router.navigate(['/inicio']);
      } else {
        console.log("email errado")
        throw {login: false, email: true};

      }

    }else {
      console.log("preciso de dados!!!")
      throw {login: true, email: false};
    }

  }

}
