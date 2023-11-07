import {Component, OnInit} from '@angular/core';
import {EventoService} from "../services/evento.service";
import {DetalheEvento} from "../../data/detalhesEventos";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit{

  detalhes? : DetalheEvento;
  id? : number | any;

  constructor(private eventoService : EventoService, private route : ActivatedRoute) {
    this.id = route.snapshot.params['id']

  }


  ngOnInit(): void {
    this.eventoService.getEventoDetalhes(this.id).subscribe( data => {
      this.detalhes = data.evento;
      console.log(data)
    })
  }

  getImagemUrl(urlImagem: string | any) {
    return `url('${this.eventoService.getImagemURL(urlImagem)}')`;

  }



}
