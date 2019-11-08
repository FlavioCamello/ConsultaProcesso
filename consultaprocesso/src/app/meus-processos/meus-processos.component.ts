import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Bd } from 'src/services/bd.service';
import { Autenticacao } from 'src/services/autenticacao.service';
import { Projeto } from 'src/Models/Projeto';
import { Router } from '@angular/router';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { Cores } from 'src/Models/Cores';

@Component({
  selector: 'app-meus-processos',
  templateUrl: './meus-processos.component.html',
  styleUrls: ['./meus-processos.component.css']
})
export class MeusProcessosComponent implements OnInit {
  faFile = faFile;
  faFolder = faFolder
  private userEmail: string
  private projetos: Projeto[]
  private cores: string[] = Cores.cores

  constructor(private bd: Bd,
    private autenticacao: Autenticacao, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.autenticacao.retornaUsuarioLogado().then((usuario: any) => {
      this.userEmail = usuario.email
      this.bd.recuperarProjetos(this.userEmail)
        .then((projetos: any) => {
          this.projetos = projetos
          for (var i in this.projetos) {
            this.projetos[i].cor = this.cores[i]
          }
          console.log("teste", this.projetos)
        })
      this.spinner.hide();
    })
  }


  public abrirTelaProjeto(projeto: Projeto): void {
    this.router.navigate(['/projeto'],
      { queryParams: projeto });
  }

  getColor(i: string) {
    let myStyles = {
      'color': '#FFFFFF',
      'background-color': this.cores[i]
    };
    return myStyles;
  }
  
  getStyleIcon(i: string) {
    let myStyles = {
      'color': this.cores[i]
    };
    return myStyles;
  }
  getTamanhoArrayProcessos(obj: any) {
    if (obj != undefined) {
      let cont: number
      cont = Object.keys(obj).length
      return cont
    }

    return 0
  }

  public atualizarTelaMeusProjetos(): void {
    this.ngOnInit()
  }
}
