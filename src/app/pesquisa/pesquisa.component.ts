import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Artista} from "../../data/artistas";
import {EventoService} from "../services/evento.service";
import {Evento} from "../../data/eventos";

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit{

  eventos : Evento[] = []

  artistas : Artista[] = []


  pagina: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(public eventoService : EventoService){
  }
  ngOnInit(): void {
    this.pagina.subscribe( novaPagina =>{
      this.eventoService.getArtistas(novaPagina).subscribe( artistasResponse => {
        this.artistas = artistasResponse.artistas;
      })
    })

    this.pagina.subscribe( novaPagina => {
      this.eventoService.getEventos(novaPagina).subscribe(eventoResponse => {
        this.eventos = eventoResponse.eventos;
      })
    })
  }

}
