import {Component, Input, OnInit} from '@angular/core';
import {EventoService} from "../services/evento.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit{

  @Input() id! : number;
  @Input() nome! : string;
  @Input() estilo! : string;
  @Input() imagem! : string;
  @Input() palco? : string;
  @Input() designacao? :string;


  constructor(private eventoService : EventoService) {
  }

    ngOnInit(): void {
    this.imagem = this.eventoService.getImagemURL(this.imagem);
    }
}
