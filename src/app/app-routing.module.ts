import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";
import {PesquisaComponent} from "./pesquisa/pesquisa.component";
import {BilhetesComponent} from "./bilhetes/bilhetes.component";
import {PessoalComponent} from "./pessoal/pessoal.component";
import {EventoDetalheComponent} from "./evento-detalhe/evento-detalhe.component";
import {ArtistaDetalheComponent} from "./artista-detalhe/artista-detalhe.component";
import {ConfirmacaoCompraComponent} from "./confirmacao-compra/confirmacao-compra.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'pesquisa', component: PesquisaComponent},
  {path: 'bilhetes', component: BilhetesComponent},
  {path: 'pessoal', component: PessoalComponent},
  {path: 'evento/:id', component : EventoDetalheComponent},
  {path: 'artista/:id', component : ArtistaDetalheComponent},
  {path: 'confirmacao-compra', component : ConfirmacaoCompraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration : 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
