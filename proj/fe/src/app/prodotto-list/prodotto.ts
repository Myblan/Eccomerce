

export class Prodotto{
    
    id: number;
    nome: string;
    descrizione: string;
    taglia: number;
    prezzo: number;
    imageUrl: String;

    

    constructor(id:number,nome:string,descrizione:string,taglia:number,prezzo:number,imageUrl:String){
        this.id=id;
        this.nome=nome;
        this.descrizione=descrizione;
        this.taglia=taglia;
        this.prezzo=prezzo;
        this.imageUrl=imageUrl;
    }
    
    public getNome():string{
        return this.nome;
    }
    

}