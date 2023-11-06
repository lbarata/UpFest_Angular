import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL = "https://upfest.site";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {}

  getEventos() : Observable<eventoResponse> | any {
    return this.http.get<eventoResponse>(BASE_URL);

  }
}
