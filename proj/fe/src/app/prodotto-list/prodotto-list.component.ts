import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProdottoService } from "../prodotto.service";
import { Prodotto } from "./prodotto";
import { Router } from "@angular/router";
@Component({
       selector:'app-prodotto-list',
       templateUrl:'./prodotto-list.component.html',
       styleUrls: ['./prodotto-list.component.css']
})

export class ProdottoListComponent implements OnInit{
    
    public title='lista prodotti';
    
    prodotti:Observable<Prodotto[]>=new Observable<Prodotto[]>();
    
    constructor(private prodottoService:ProdottoService,private router:Router){}

     ngOnInit(){
        this.reloadData();
     }

     reloadData(){
      this.prodotti=this.prodottoService.getProdottiList();
     }

     deleteProdotto(id:number){
       
         this.prodottoService.deleteProdotto(id)
         .subscribe(
            data => {
              console.log(data);
              this.reloadData(); 
            },
            error => console.log(error));
     }

     updateProdotto(id:number){
      this.router.navigate(['update',id]);
     }

     prodottoDetails(id:number){
       
        this.router.navigate(['details',id]);
     }

}
