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
              private eventoService : EventoService) {

    this.nomeUser =  this.getNomeUser();
  }


  ngOnInit(): void {
      this.eventoService.getEventos().subscribe( novaLista => {
        this.eventos = novaLista.eventos;
        console.log(this.eventos)
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

  getImagemUrl(urlImagem : string) {
    return `background-image: linear-gradient(to bottom, rgba(169,169,169,0),
            #1f1f1f), url('${this.eventoService.getImagemURL(urlImagem)}')`;

  }



}
