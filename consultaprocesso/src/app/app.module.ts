import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { MeusProcessosComponent } from './meus-processos/meus-processos.component';
import { AcessoComponent } from './acesso/acesso.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { Autenticacao } from 'src/services/autenticacao.service';
import { TopoComponent } from './topo/topo.component';
import { AutenticacaoGuard } from 'src/services/autenticacao-guard.service';
import { IncluirProjetoComponent } from './incluir-projeto/incluir-projeto.component';
import { Bd } from 'src/services/bd.service';
import { ProjetoComponent } from './projeto/projeto.component';
import { ModalIncluirProcessoComponent } from './modal-incluir-processo/modal-incluir-processo.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    MeusProcessosComponent,
    AcessoComponent,
    LoginComponent,
    CadastroComponent,
    BannerComponent,
    TopoComponent,
    IncluirProjetoComponent,
    ProjetoComponent,
    ModalIncluirProcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [ Autenticacao, AutenticacaoGuard, Bd ],
  bootstrap: [AppComponent]
})
export class AppModule { }
