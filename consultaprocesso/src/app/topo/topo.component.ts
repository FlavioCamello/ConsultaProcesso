import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaComponent } from '../consulta/consulta.component';
import { Consulta } from 'src/Models/Consulta';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  
  public pesquisa: string
  public formulario: FormGroup = new FormGroup({
    'pesquisa': new FormControl()
  })
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public pesquisarProcesso(): void{
    var consulta: Consulta = new Consulta()
    consulta.processo = this.formulario.value.pesquisa 
    this.router.navigate(['/consulta'], 
    {queryParams: consulta});
  }
}
