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
import { EventoComponent } from './evento/evento.component';
import { ArtistaDetalheComponent } from './artista-detalhe/artista-detalhe.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { BilheteCompraComponent } from './bilhete-compra/bilhete-compra.component';
import { ConfirmacaoCompraComponent } from './confirmacao-compra/confirmacao-compra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { PagamentoPendenteComponent } from './pagamento-pendente/pagamento-pendente.component';
import { PagamentoValidadoComponent } from './pagamento-validado/pagamento-validado.component';


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
    EventoComponent,
    ArtistaDetalheComponent,
    SugestaoComponent,
    BilheteCompraComponent,
    ConfirmacaoCompraComponent,
    PagamentoPendenteComponent,
    PagamentoValidadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
