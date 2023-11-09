import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RespostaCompraBilhete} from "../../data/respostaCompraBilhete";


const apiURL = environment.BASE_URL;
const authTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRhdmlkX0JhcmF0YV9kZS5sYmFyYXRhQGdtYWlsLmNvbSIsImlhdCI6MTY5ODg4Njk4MiwiZXhwIjoxNzMwNDIyOTgyfQ.SbW914f20YBKJQL_-5MV_h-brqdixAMrowZS9K0MTfE';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  dadosUser: string[] = [];

  constructor(private router: Router, private http: HttpClient) {}


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

    // Verificar se o existem dados para ser feito o "login"
    if (!!nome && !!email) {

      // Verificar se o "e-mail" tem um formato certo
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

  getNome(){
    return this.dadosUser[0];
  }

  getEmail() {
    return this.dadosUser[1];
  }


  comprarBilhete(eventoID: number, serieID : number ) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});


    const body = {
      "evento": eventoID,
      "nome": this.getNome(),
      "email": this.getEmail(),
      "serie": serieID
    };


    return this.http.post<RespostaCompraBilhete>(apiURL + `vendas/bilhetes/comprar`, body, {headers});
  }



}
