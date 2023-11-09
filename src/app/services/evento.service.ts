import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {eventoResponse} from "../../data/eventos";
import {environment} from "../../environments/environment";
import {detalheEventoResponse} from "../../data/detalhesEventos";
import {artistaResponse} from "../../data/artistas";
import {detalheArtistaResponse} from "../../data/detalhesArtistas";
import {concertoArtistaResponse} from "../../data/concertosArtistas";
import {concertoEventoResponse} from "../../data/concertosEventos";
import {bilheteCompraResponse} from "../../data/bilheteCompra";


const apiURL = environment.BASE_URL;
const authTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRhdmlkX0JhcmF0YV9kZS5sYmFyYXRhQGdtYWlsLmNvbSIsImlhdCI6MTY5ODg4Njk4MiwiZXhwIjoxNzMwNDIyOTgyfQ.SbW914f20YBKJQL_-5MV_h-brqdixAMrowZS9K0MTfE';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {}




  getEventos(pagina : number) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});


    return this.http.get<eventoResponse>(apiURL + `evento/listar?pagina=${pagina}`, {headers});
  }

  getImagemURL(urlImagem : string | any) {

    return `background-image: url('${apiURL + "public/" + urlImagem}')`;
  }

  getImagemUrlGradient(urlImagem : string | any) {

    return `background-image: linear-gradient(to bottom, rgba(169,169,169,0), #1f1f1f), url('${apiURL + "public/" + urlImagem}')`;
  }

  getEventoDetalhes(idEevento : number) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});


    return this.http.get<detalheEventoResponse>(apiURL + "evento/" + idEevento + "/detalhes" , {headers});

  }

  getArtistaDetalhes(idArtista : number) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});

    return this.http.get<detalheArtistaResponse>(apiURL + "artistas/" + idArtista + "/detalhes" , {headers});
  }

  getPesquisaArtistas(input : string) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});

    return this.http.get<artistaResponse>(apiURL + `artistas/listar?pesquisa=${input}`, {headers});

  }

  getPesquisaEventos(input : string) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});

    return this.http.get<eventoResponse>(apiURL + `evento/listar?pesquisa=${input}`, {headers});

  }

  getConcertosArtista(artistaID : number) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});

    return this.http.get<concertoArtistaResponse>(apiURL + `artistas/` + artistaID + `/concertos`, {headers});

  }

  getConcertosEvento(eventoID : number) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});

    return this.http.get<concertoEventoResponse>(apiURL + `evento/` + eventoID + `/concertos/listar`, {headers});


  }

  getSerieBilhetes(eventoID : number){

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});

    return this.http.get<bilheteCompraResponse>(apiURL + `evento/` + eventoID + `/series_bilhetes/listar`, {headers});
  }


}
