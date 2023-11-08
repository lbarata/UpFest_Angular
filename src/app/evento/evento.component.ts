import {Component, Input, OnInit} from '@angular/core';
import {EventoService} from "../services/evento.service";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit{

  @Input() id! : number;
  @Input() designacao! : string;
  @Input() imagem! : string;
  @Input() data! : string;
  @Input() local! : string;
  @Input() descricao! : string;
  constructor(private eventoService : EventoService) {
  }

  ngOnInit(): void {
    this.imagem = this.eventoService.getImagemURL(this.imagem);
  }

}
