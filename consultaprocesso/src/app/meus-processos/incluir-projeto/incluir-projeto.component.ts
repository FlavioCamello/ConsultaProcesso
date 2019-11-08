import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from 'src/services/bd.service';
import { Autenticacao } from 'src/services/autenticacao.service';
import { Projeto } from 'src/Models/Projeto';



@Component({
  selector: 'app-incluir-projeto',
  templateUrl: './incluir-projeto.component.html',
  styleUrls: ['./incluir-projeto.component.css']
})
export class IncluirProjetoComponent implements OnInit {
  private userEmail: string
  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl()
  })
  @ViewChild('closeBtn', {static: false}) closeBtn: ElementRef;
  @Output() public atualizarTelaMeusProjetos: EventEmitter<any> = new EventEmitter<any>()

  constructor(private bd: Bd,
    private autenticacao: Autenticacao) { }

  ngOnInit() {
    this.autenticacao.retornaUsuarioLogado().then((usuario: any) => this.userEmail = usuario.email)
  }

  public savarNovoProjeto(): void{
    let projeto = new Projeto()
    projeto.email_usuario = this.userEmail
    projeto.titulo = this.formulario.value.titulo
    this.bd.criarProjeto(projeto)
    
    this.fecharModal()

    this.atualizarTelaMeusProjetos.emit()
  }

  private fecharModal(): void{
    this.closeBtn.nativeElement.click();
  }
}
