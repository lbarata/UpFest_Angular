import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {EventoService} from "../services/evento.service";
import {Evento} from "../../data/eventos";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  nomeUser : string= '';
  eventos : Evento[] = [];


  constructor(private  userService : UserService,
              public eventoService : EventoService) {

    this.nomeUser =  this.getNomeUser();
  }


  ngOnInit(): void {
      this.eventoService.getEventos(0).subscribe( novaLista => {
        this.eventos = novaLista.eventos;
      })

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


  protected readonly indexedDB = indexedDB;
}
