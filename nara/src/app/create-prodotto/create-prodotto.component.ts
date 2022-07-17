import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto-list/prodotto';
import { IData } from '../data';
import { ProdottoService } from '../prodotto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-prodotto',
  templateUrl: './create-prodotto.component.html',
  styleUrls: ['./create-prodotto.component.css']
})
export class CreateProdottoComponent implements OnInit {

//prodotto:Prodotto;=new Prodotto(0,'','',0,0,'');
submitted=false;

prodotto:Prodotto=new Prodotto(0,'','',0,0,'');

  constructor(private prodottoService:ProdottoService,private router:Router) { }

  ngOnInit(): void {
  }

  newProdotto():void{
    this.submitted=false;
    this.prodotto=new Prodotto(0,'','',0,0,'');
  }

  save(){
    this.prodottoService.createProdotto(this.prodotto).subscribe(data => console.log(data),error => console.log(error));
    this.prodotto=new Prodotto(0,'','',0,0,'');
    this.gotoList();
  }

  onSubmit(){
     this.submitted=true;
     this.save();
  }

  gotoList(){
    this.router.navigate(['/prodotti']);
  }

}
