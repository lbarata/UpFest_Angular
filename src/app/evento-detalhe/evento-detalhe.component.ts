import {Component, OnInit} from '@angular/core';
import {EventoService} from "../services/evento.service";
import {DetalheEvento} from "../../data/detalhesEventos";
import {ActivatedRoute} from "@angular/router";
import {ConcertoEvento} from "../../data/concertosEventos";
import {BilheteCompra} from "../../data/bilheteCompra";

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit{

  detalhes? : DetalheEvento;
  id? : number | any;
  imagem! : string;
  concertos? : ConcertoEvento[] = [];
  serieBilhetes? : BilheteCompra[] = [];

  constructor(private eventoService : EventoService, private route : ActivatedRoute) {
    this.id = route.snapshot.params['id']

  }


  ngOnInit(): void {

    this.eventoService.getEventoDetalhes(this.id).subscribe( data => {
      this.detalhes = data.evento;
      this.imagem = this.eventoService.getImagemURL(data.evento.imagem);
    })

    this.eventoService.getConcertosEvento(this.id).subscribe(novaLista =>{
      this.concertos = novaLista.concertos;
    })

    this.eventoService.getSerieBilhetes(this.id).subscribe( novaLista => {
      this.serieBilhetes = novaLista.bilhetesCompra;
    })


  }



}
