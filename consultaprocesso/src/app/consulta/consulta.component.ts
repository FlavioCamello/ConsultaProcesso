import { Component, OnInit, NgZone } from '@angular/core';
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


  public consultaView: Consulta
  public numeroProcesso: string
  public consulta: Observable<Consulta>
  processoService: ProcessoService
  constructor(processoService: ProcessoService, private zone:NgZone ) { 
    this.processoService = processoService
    this.consultaView = new Consulta()
  }

  public retornouConsulta: boolean = false

  ngOnInit() { 
    
  }

  public consultarProcesso(): void{
      console.log("O numero do processo é: ",this.numeroProcesso)
      //this.retornouConsulta = true
      this.consultaView.ult_evento = "eu mesmo"
      this.consulta = this.processoService.retornaDadosProcesso(this.numeroProcesso.replace('/', 'barra'));

      this.consulta.subscribe((consulta: Consulta) =>{
        console.log('Retorno Nome: ', consulta.nome)
          this.consultaView = consulta 
          this.retornouConsulta = true 
        })
          // error(msg) { console.log('Error Getting Location: ', msg); }
        
        
        // console.log('Retorno Nome: ', retorno.nome)
        // console.log('Consulta: ', this.objConsulta.ult_evento)
      

      
  }
}
