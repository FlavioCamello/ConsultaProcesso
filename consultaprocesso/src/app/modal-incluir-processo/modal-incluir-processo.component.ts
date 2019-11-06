import { Component, OnInit, NgZone } from '@angular/core';
import { Consulta } from 'src/Models/Consulta';
import { Observable } from 'rxjs';
import { ProcessoService } from '../processo.service';
import { Bd } from 'src/services/bd.service';
import { Autenticacao } from 'src/services/autenticacao.service';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from 'src/Models/Projeto';
import { Processo } from 'src/Models/Processo';

@Component({
  selector: 'app-modal-incluir-processo',
  templateUrl: './modal-incluir-processo.component.html',
  styleUrls: ['./modal-incluir-processo.component.css'],
  providers: [ ProcessoService ]
})
export class ModalIncluirProcessoComponent implements OnInit {

  public consultaView: Consulta = new Consulta()
  public numeroProcesso: string
  public consulta: Observable<Consulta>
  public mensagemCampoProcessos: string = ""
  public processoService: ProcessoService
  public retornouConsulta: boolean = false
  private userEmail: string
  private projeto: Projeto
  
  constructor(processoService: ProcessoService, private zone:NgZone, private bd: Bd, private autenticacao: Autenticacao, private route: ActivatedRoute ) { 
    this.processoService = processoService
    this.consultaView = new Consulta()
  }

  ngOnInit() {
    let questoesParam = this.route
    .queryParamMap.subscribe((retorno: any) => {
      this.projeto = retorno.params 
      console.log(this.projeto)
    })

    this.autenticacao.retornaUsuarioLogado().then((usuario: any) => this.userEmail = usuario.email)
  }

  public consultarProcesso(): void{

    this.mensagemCampoProcessos = "Pesquisando"
    this.consulta = this.processoService.retornaDadosProcesso(this.numeroProcesso);
    
    this.consulta.subscribe((consulta: Consulta) => {
        console.log('Retorno Nome: ', consulta)
        this.mensagemCampoProcessos = (this.retornouConsulta = (this.consultaView = consulta.nome != null ? consulta : null) == null ? false : true) == true ? "" : "Não existe processo a ser exibido"
      })
}

 public adicionarProcessoAoProjeto(): void{
   let processoTemp: Processo = new Processo()
   let processo = processoTemp.consultaInProcesso(this.consultaView)
    this.bd.inserirProcessoAoProjeto(this.userEmail, this.projeto.key, processo )
 }

}
