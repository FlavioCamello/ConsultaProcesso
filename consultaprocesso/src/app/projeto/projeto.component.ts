import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from 'src/Models/Projeto';
import { Autenticacao } from 'src/services/autenticacao.service';
import { Bd } from 'src/services/bd.service';
import { Processo } from 'src/Models/Processo';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {
  private userEmail: string
  private projeto: Projeto
  private processos: Processo[]
  constructor(private route: ActivatedRoute, private autenticacao: Autenticacao, private bd: Bd) { }

  ngOnInit() {

    //recupera parametros passados via url
    let questoesParam = this.route
    .queryParamMap.subscribe((retorno: any) => {
      this.projeto = retorno.params 
    })
      this.autenticacao.retornaUsuarioLogado().then((usuario: any) => {
        this.userEmail = usuario.email
        this.bd.recuperarProcessosDoProjeto(this.userEmail, this.projeto.key).then((processos: Processo[]) => {
          this.processos = processos
          console.log("Todos os processos do projeto são: ",this.processos)
        });
      })

      
  }

  

}
