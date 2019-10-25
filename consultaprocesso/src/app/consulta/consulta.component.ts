import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessoService } from '../processo.service';
import { Consulta } from 'src/Models/Consulta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers: [ ProcessoService ]
})
export class ConsultaComponent implements OnInit {

  public objConsulta: Consulta
  public numeroProcesso: string
  public consulta: Observable<Consulta>
  processoService: ProcessoService
  constructor(processoService: ProcessoService) { 
    this.processoService = processoService
    this.objConsulta = new Consulta()
  }

  ngOnInit() { 
    
  }

  public consultarProcesso(): void{
      console.log("O numero do processo é: ",this.numeroProcesso)

      this.consulta = this.processoService.retornaDadosProcesso();

      this.consulta.subscribe({
        next(retorno) { this.objConsulta = retorno 
          console.log('Retorno Nome: ', retorno.nome)
          console.log('Consulta: ', this.objConsulta.ult_evento); },
        error(msg) { console.log('Error Getting Location: ', msg); }
      });
      
     
      

      
  }
}
