import {Component, Input, OnInit} from '@angular/core';
import {EventoService} from "../services/evento.service";

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.scss']
})
export class SugestaoComponent implements OnInit{

  @Input() id! : number;
  @Input() designacao! : string;
  @Input() imagem! : string;
  @Input() data! : string;
  @Input() local! : string;
  @Input() preco_desde! : number;

  constructor(private eventoService : EventoService) {

  }

  ngOnInit(): void {
    this.imagem = this.eventoService.getImagemUrlGradient(this.imagem);
  }

}
