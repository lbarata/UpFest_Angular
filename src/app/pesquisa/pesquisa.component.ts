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
export class PesquisaComponent implements OnInit {

    pesquisaInput = '';

    eventos: Evento[] = []
    artistas: Artista[] = []

    pesquisa: BehaviorSubject<string> = new BehaviorSubject<string>('');

    resultadosEventos : boolean = false;
    resultadosArtistas : boolean = false;

    constructor(private eventoService: EventoService) {
    }

    ngOnInit(): void {
        this.pesquisa.subscribe(novaPesquisa => {
            this.eventoService.getPesquisaArtistas(novaPesquisa).subscribe(novosArtistas => {
                this.artistas = novosArtistas.artistas;

                //Verificar se não existem resultados para a pesquisa
                if (novosArtistas.artistas.length === 0){
                    this.resultadosArtistas = true;
                } else {
                    this.resultadosArtistas = false;

                }
            })
            this.eventoService.getPesquisaEventos(novaPesquisa).subscribe(novosEventos => {
                this.eventos = novosEventos.eventos;

                //Verificar se não existem resultados para a pesquisa
                if (novosEventos.eventos.length === 0){
                    this.resultadosEventos = true;
                } else {
                    this.resultadosEventos = false;
                }
            })
        })


    }

    pesquisaClick() {
        this.eventoService.getPesquisaEventos(this.pesquisaInput).subscribe(lista_Eventos => {
            this.eventos = lista_Eventos.eventos;
        })

        this.eventoService.getPesquisaArtistas(this.pesquisaInput).subscribe(lista_Artistas => {
            this.artistas = lista_Artistas.artistas;
        })

    }

}
