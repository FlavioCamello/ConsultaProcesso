import { Projeto } from 'src/Models/Projeto';
import { Processo } from 'src/Models/Processo';
import * as firebase from 'firebase';
import { Consulta } from 'src/Models/Consulta';

export class Bd{
    public criarProjeto(projeto: Projeto): void{        
        firebase.database().ref(`projetos_usuario/${btoa(projeto.email_usuario)}`)
        .push( { titulo: projeto.titulo } )
    }

    public inserirProcessoAoProjeto(email: string, keyProjeto: string, processo: Processo): void{      
        firebase.database().ref(`projetos_usuario/${btoa(email)}/${keyProjeto}/processos`)
        .push( { processo } )
    }

    
    public recuperarProcessosDoProjeto(email: string,  keyProjeto: string): Promise<Processo[]>{
        let processos: Array<Processo> = []
        return new Promise((resolve, reject) => {
            firebase.database().ref(`projetos_usuario/${btoa(email)}/${keyProjeto}/processos`)
            .once('value')
            .then((snapshot: any) => {
                snapshot.forEach((childSnapshot: any) => {
                    let processo = childSnapshot.val()
                    processo.key = childSnapshot.key;
                    processos.push(processo)
                })               
            })
            resolve(processos)
        })                
    }

    public recuperarProjetos(email: string): Promise<Projeto[]>{
        let projetos: Array<Projeto> = []
        return new Promise((resolve, reject) => {
            firebase.database().ref(`projetos_usuario/${btoa(email)}`)
            .once('value')
            .then((snapshot: any) => {
                // console.log("Snap: ",snapshot)
                snapshot.forEach((childSnapshot: any) => {
                    let projeto = childSnapshot.val()
                    projeto.key = childSnapshot.key;
                    // console.log("Projeto: ",childSnapshot.key)
                    projetos.push(projeto)
                })               
            })
            resolve(projetos)
        })                
    }
}
