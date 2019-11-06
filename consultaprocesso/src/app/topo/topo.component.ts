import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    'pesquisa': new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }

  public pesquisarProcesso(): void{
    console.log(this.formulario.value.pesquisa)
  }
}
