import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {eventoResponse} from "../../data/eventos";
import {environment} from "../../environments/environment";
import {detalheResponse} from "../../data/detalhesEventos";


const apiURL = environment.BASE_URL;
const authTOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRhdmlkX0JhcmF0YV9kZS5sYmFyYXRhQGdtYWlsLmNvbSIsImlhdCI6MTY5ODg4Njk4MiwiZXhwIjoxNzMwNDIyOTgyfQ.SbW914f20YBKJQL_-5MV_h-brqdixAMrowZS9K0MTfE';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {}

  getEventos() {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});


    return this.http.get<eventoResponse>(apiURL + "evento/listar", {headers});
  }

  getImagemURL(urlImagem: string | any) {

    return apiURL + "public/" + urlImagem;

  }

  getEventoDetalhes(idEevento : number) {

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authTOKEN}`});


    return this.http.get<detalheResponse>(apiURL + "evento/" + idEevento + "/detalhes" , {headers});

  }


}
