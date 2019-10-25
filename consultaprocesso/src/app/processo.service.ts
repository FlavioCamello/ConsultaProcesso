import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProcessoService{
    url: string = "https://localhost:44363/api/values"

    Hheaders: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3');

constructor(private http: HttpClient){

}

    public retornaDadosProcesso(): Observable<any>{
        return this.http.get(this.url, {headers: this.Hheaders})
    }
}

//https://aluracar.herokuapp.com/salvarpedido?carro=Astra+Sedan&email=asdasd&endereco=Asd&nome=TIago&preco=40300
//https://sigmine.dnpm.gov.br/arcgis/rest/services/extra/dados_dnpm/MapServer/0/query?text=896173%2F2018&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&where=&returnGeometry=false&outSR=4326&outFields=NOME%2CAREA_HA%2CFASE%2CULT_EVENTO%2CShape&f=pjson