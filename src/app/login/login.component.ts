import {Component} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  inNome = '';
  inEmail = '';
  dadosLoginIncorretos : boolean = false;
  dadosEmailIncorretos : boolean =  false;


  constructor(private userService: UserService) {
  }

  login(nome : string, email : string) {
    try {
      this.userService.loginUser(nome, email);
    } catch (e : {login : boolean, email : boolean} | any) {
      this.dadosLoginIncorretos = e.login;
      this.dadosEmailIncorretos = e.email;
    }
  }
}
