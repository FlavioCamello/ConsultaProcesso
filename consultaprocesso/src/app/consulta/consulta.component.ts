import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public numeroProcesso: string
  constructor() { }

  ngOnInit() {
  }

  public consultarProcesso(): void{
      console.log("O numero do processo é: ",this.numeroProcesso)
  }
}
