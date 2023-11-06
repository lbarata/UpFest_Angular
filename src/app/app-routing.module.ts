import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";
import {PesquisaComponent} from "./pesquisa/pesquisa.component";
import {BilhetesComponent} from "./bilhetes/bilhetes.component";
import {PessoalComponent} from "./pessoal/pessoal.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'pesquisa', component: PesquisaComponent},
  {path: 'bilhetes', component: BilhetesComponent},
  {path: 'pessoal', component: PessoalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
