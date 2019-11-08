import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessoService } from '../processo.service';
import { Consulta } from 'src/Models/Consulta';
import uiMask from 'angular-ui-mask';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers: [ ProcessoService ]
})
export class ConsultaComponent implements OnInit {


  public consultaView: Consulta = new Consulta()
  public numeroProcesso: string
  public consulta: Observable<Consulta>
  public mensagemCampoProcessos: string = ""
  public processoService: ProcessoService
  constructor(private route: ActivatedRoute, processoService: ProcessoService, private zone:NgZone, private spinner: NgxSpinnerService ) { 
    this.processoService = processoService
    this.consultaView = new Consulta()
  }

  public retornouConsulta: boolean = false
  
  ngOnInit() { 
    //this.route.snapshot.params.pesquisa;

    let questoesParam = this.route
    .queryParamMap.subscribe((retorno: any) => {
      this.numeroProcesso = retorno.params.processo
      this.consultarProcesso()
    })
  }

  public consultarProcesso(): void{
    this.spinner.show();
      console.log("O numero do processo é: ",this.numeroProcesso)
      //this.retornouConsulta = true
      //this.consultaView.ult_evento = "eu mesmo"
      //this.mensagemCampoProcessos = "Pesquisando"
      this.consulta = this.processoService.retornaDadosProcesso(this.numeroProcesso);
      
      this.consulta.subscribe((consulta: Consulta) =>{
        console.log('Retorno Nome: ', consulta)
        this.mensagemCampoProcessos = (this.retornouConsulta = (this.consultaView = consulta.nome != null ? consulta : null) == null ? false : true) == true ? "" : "Não existe processo a ser exibido"
        this.spinner.hide();
          //this.retornouConsulta = true 
        })
        
          // error(msg) { console.log('Error Getting Location: ', msg); }
        
        
        // console.log('Retorno Nome: ', retorno.nome)
        // console.log('Consulta: ', this.objConsulta.ult_evento)
      

      
  }

  
  
}
