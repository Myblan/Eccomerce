import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from '../prodotto-list/prodotto';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotto-details',
  templateUrl: './prodotto-details.component.html',
  styleUrls: ['./prodotto-details.component.css']
})
export class ProdottoDetailsComponent implements OnInit {

  id:number=0;
  prodotto:Prodotto=new Prodotto(0,'','',0,0,'');
  

  constructor(private route:ActivatedRoute,private router:Router,private prodottoService:ProdottoService) { }

  ngOnInit(): void {
    this.prodotto=new Prodotto(0,'','',0,0,'');
    this.id=this.route.snapshot.params['id'];
    this.prodottoService.getProdotto(this.id)
    .subscribe(data => {
      console.log(data)
      this.prodotto=data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['prodotti']);
  }

}
