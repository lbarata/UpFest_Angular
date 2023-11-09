import {Component, OnInit} from '@angular/core';
import {DetalheArtista} from "../../data/detalhesArtistas";
import {EventoService} from "../services/evento.service";
import {ActivatedRoute} from "@angular/router";
import {ConcertoArtista} from "../../data/concertosArtistas";

@Component({
  selector: 'app-artista-detalhe',
  templateUrl: './artista-detalhe.component.html',
  styleUrls: ['./artista-detalhe.component.scss']
})
export class ArtistaDetalheComponent implements OnInit{

  detalhes? : DetalheArtista;
  id? : number | any;
  imagem! : string;
  concertos? : ConcertoArtista[] = [];



  constructor(private eventoService : EventoService, private route : ActivatedRoute) {
    this.id = route.snapshot.params['id']

  }

  ngOnInit(): void {

    this.eventoService.getArtistaDetalhes(this.id).subscribe( data => {
      this.detalhes = data.artista;
      this.imagem = this.eventoService.getImagemURL(data.artista.imagem);
    })

    this.eventoService.getConcertosArtista(this.id).subscribe(proximosConcertos => {
      this.concertos = proximosConcertos.concertos;
    })

  }

}
