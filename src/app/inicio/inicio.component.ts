import { Component } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  nomeUser : string= '';

  constructor(private  userService : UserService) {
    this.nomeUser =  this.getNomeUser();
  }

  getNomeUser()  {
    //Load dos dados de utilizador
    this.userService.loadLocalStorage();

    // Devolve o Nome do User
    if (this.userService.dadosUser.length > 0) {
      return this.userService.dadosUser[0];

    }
    console.log("Não existe nenhum user")
    return '';

  }


}
