import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { Autenticacao } from 'src/services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public autenticado: boolean = false

  constructor(private autenticacao: Autenticacao){

  }
  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyDWqscF1v4AHUfGmim_Ct7c_gYWDjD1t68",
      authDomain: "angular-processosminerarios.firebaseapp.com",
      databaseURL: "https://angular-processosminerarios.firebaseio.com",
      projectId: "angular-processosminerarios",
      storageBucket: "angular-processosminerarios.appspot.com",
      messagingSenderId: "31638787731",
      appId: "1:31638787731:web:7135ac9f9dcdd2ee4c1f66",
      measurementId: "G-8PQPP6KEMQ"
    };

    firebase.initializeApp(firebaseConfig)

    this.autenticado = this.autenticacao.autenticado()
  }
  title = 'consultaprocesso';



}
