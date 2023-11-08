import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {EventoService} from "../services/evento.service";
import {BehaviorSubject} from "rxjs";
import {Evento} from "../../data/eventos";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  nomeUser : string= '';
  eventos : Evento[] = [];

  pagina: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private  userService : UserService,
              public eventoService : EventoService) {

    this.nomeUser =  this.getNomeUser();
  }


  ngOnInit(): void {
    this.pagina.subscribe( novapagina => {
      this.eventoService.getEventos(novapagina).subscribe( novaLista => {
        this.eventos = novaLista.eventos;
      })
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
