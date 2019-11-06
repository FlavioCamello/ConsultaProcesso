import { Component, OnInit } from '@angular/core';
import { Bd } from 'src/services/bd.service';
import { Autenticacao } from 'src/services/autenticacao.service';
import { Projeto } from 'src/Models/Projeto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-processos',
  templateUrl: './meus-processos.component.html',
  styleUrls: ['./meus-processos.component.css']
})
export class MeusProcessosComponent implements OnInit {

  private userEmail: string
  private projetos: Projeto[]


  constructor(private bd: Bd,
    private autenticacao: Autenticacao, private router: Router) { }

  ngOnInit() {
    this.autenticacao.retornaUsuarioLogado().then((usuario: any) => {
      this.userEmail = usuario.email
      this.bd.recuperarProjetos(this.userEmail)
        .then((projetos: any) => {
          this.projetos = projetos
        })
    })  
  }

  public abrirTelaProjeto(projeto: Projeto): void{
    this.router.navigate(['/projeto'], 
    {queryParams: projeto});
  }
}
