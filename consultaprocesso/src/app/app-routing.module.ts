import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { MeusProcessosComponent } from './meus-processos/meus-processos.component';
import { AcessoComponent } from './acesso/acesso.component';
import { AutenticacaoGuard } from 'src/services/autenticacao-guard.service';
import { ProjetoComponent } from './projeto/projeto.component';



const routes: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'consulta', component: ConsultaComponent, canActivate: [ AutenticacaoGuard ] },
  { path: 'MeusProcessos', component: MeusProcessosComponent, canActivate: [ AutenticacaoGuard ] },
  { path: 'projeto', component: ProjetoComponent, canActivate: [ AutenticacaoGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
