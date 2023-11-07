import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { InicioComponent } from './inicio/inicio.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { BilhetesComponent } from './bilhetes/bilhetes.component';
import { PessoalComponent } from './pessoal/pessoal.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { ArtistaComponent } from './artista/artista.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InicioComponent,
    PesquisaComponent,
    BilhetesComponent,
    PessoalComponent,
    ArtistaComponent,
    EventoDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
