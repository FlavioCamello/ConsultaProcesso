import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers: [ ProcessoService ]
})
export class ConsultaComponent implements OnInit {

  public numeroProcesso: string
  public consulta: Observable<any>
  processoService: ProcessoService
  constructor(processoService: ProcessoService) { 
    this.processoService = processoService
  }

  ngOnInit() { 
    
  }

  public consultarProcesso(): void{
      console.log("O numero do processo é: ",this.numeroProcesso)

      this.consulta = this.processoService.retornaDadosProcesso();

      this.consulta.subscribe({
        next(retorno) { console.log('Retorno: ', retorno); },
        error(msg) { console.log('Error Getting Location: ', msg); }
      });

      

      
  }
}
