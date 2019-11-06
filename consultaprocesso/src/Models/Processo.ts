import { Consulta } from './Consulta'

export class Processo{
    nome: string
    area_ha: string
    fase: string
    ult_evento: string
    processo: string
    ID: string
    numero: string
    ano: string
    subs: string
    uso: string
    UF: string
    fid: string

    public consultaInProcesso(consulta: Consulta): any{
        this.nome = consulta.nome
        this.area_ha = consulta.area_ha 
        this.fase = consulta.fase
        this.ult_evento = consulta.ult_evento
        this.processo = consulta.processo
        this.ID = consulta.ID
        this.numero = consulta.numero
        this.ano = consulta.ano
        this.subs = consulta.subs
        this.uso = consulta.uso
        this.UF = consulta.UF
        this.fid = consulta.fid
        return this
    
    }
}


