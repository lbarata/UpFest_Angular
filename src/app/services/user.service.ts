import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dadosUser: string[] = [];

  constructor(private router: Router) {}


  saveLocalStorage() {
    localStorage.setItem('dadosUser', JSON.stringify(this.dadosUser));
  }

  loadLocalStorage() {
    const saveData = localStorage.getItem('dadosUser')
    if (saveData) {
      this.dadosUser = JSON.parse(saveData);
    }
  }

  saveNome(nome : string) {
    this.dadosUser.push(nome);
    this.saveLocalStorage();
    console.log(this.dadosUser)
  }

  saveEmail(email: string) {
    this.dadosUser.push(email);
    this.saveLocalStorage();
    console.log(this.dadosUser)
  }


  loginUser(nome : string, email: string) {

    // Verificar se o existem dados para ser feito o login
    if (!!nome && !!email) {

      // Verificar se o email tem um formato certo
      const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailFormat.test(email)) {
        this.saveNome(nome);
        this.saveEmail(email);
        this.router.navigate(['/inicio']);

      } else {
        throw {login: false, email: true};
      }

    } else {
      throw {login: true, email: false};
    }

  }


}
