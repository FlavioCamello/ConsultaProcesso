import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Consulta } from '../Models/Consulta'

@Injectable()
export class ProcessoService{
    url: string = "https://localhost:44363/api/values"

constructor(private http: HttpClient){

}

    retornaDadosProcesso(nProcesso: string): Observable<Consulta>{
        return this.http.get<Consulta>(this.url + '/' +nProcesso)
        .pipe(map((data: Consulta) => data))
    }
}

//https://aluracar.herokuapp.com/salvarpedido?carro=Astra+Sedan&email=asdasd&endereco=Asd&nome=TIago&preco=40300
//https://sigmine.dnpm.gov.br/arcgis/rest/services/extra/dados_dnpm/MapServer/0/query?text=896173%2F2018&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&where=&returnGeometry=false&outSR=4326&outFields=NOME%2CAREA_HA%2CFASE%2CULT_EVENTO%2CShape&f=pjson
//815431/2003
//890250/2002
//803235/2004