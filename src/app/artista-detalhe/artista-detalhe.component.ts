import {Component, OnInit} from '@angular/core';
import {DetalheArtista} from "../../data/detalhesArtistas";
import {EventoService} from "../services/evento.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artista-detalhe',
  templateUrl: './artista-detalhe.component.html',
  styleUrls: ['./artista-detalhe.component.scss']
})
export class ArtistaDetalheComponent implements OnInit{

  detalhes? : DetalheArtista;
  id? : number | any;
  imagem! : string;

  constructor(private eventoService : EventoService, private route : ActivatedRoute) {
    this.id = route.snapshot.params['id']

  }

  ngOnInit(): void {

    this.eventoService.getArtistaDetalhes(this.id).subscribe( data => {
      this.detalhes = data.artista;
      this.imagem = this.eventoService.getImagemURL(data.artista.imagem);
    })

  }

}
