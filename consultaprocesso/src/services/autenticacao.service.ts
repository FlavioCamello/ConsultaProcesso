
import * as firebase from 'firebase'
import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Usuario } from 'src/Models/usuario.model'
@Injectable()
export class Autenticacao{

    constructor(private route:ActivatedRoute,private router:Router){

    }

    public navigateTo(route: string): void {
        this.router.navigate([route])
        }

    public static emailUser: string
    public token_id: string
    public objUsuario: Usuario = new Usuario("","","","");
    
    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        console.log("chegamos com o usuario: ",usuario)

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta: any) => {

             delete usuario.senha

             firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                 .set( usuario )
        })
        .catch((error: Error) => {
            console.log(error)
        })
    }

    public autenticar(email: string, senha: string): Promise<any>{
        let valido: boolean = true
        return new Promise((resolve, reject) => {

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => 
            
            //recupera o token do usuario logado
            firebase.auth().currentUser.getIdToken()
            .then((idToken: string) => {
                localStorage.clear()
                this.token_id = idToken
                localStorage.setItem('idToken', idToken)
                console.log(this.token_id)

                this.router.navigate(['/consulta'])
                resolve(valido)
            }))
            .catch((error: Error) => resolve(false))
    })
}


    public retornaUsuarioLogado(): Promise<any>{
        
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => { 
                console.log("UID", user.uid)
                let objUsuario = firebase.database().ref(`usuario_detalhe/${btoa(user.email)}`)
                objUsuario.on('value', function(snapshot){
                  let usuarioSnapshot = snapshot.val()
                  
                  let usuario = new Usuario(usuarioSnapshot.email, usuarioSnapshot.nome_completo, usuarioSnapshot.nome_usuario, "")
                  resolve(usuario)  
                })
            })
        })        
    }

    public autenticado(): boolean{
        if(this.token_id === undefined && localStorage.getItem('idToken') != null){
            this.token_id = localStorage.getItem('idToken')
        }
        return this.token_id !== undefined        
    }
}