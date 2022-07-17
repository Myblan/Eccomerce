import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotto } from '../prodotto-list/prodotto';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-update-prodotto',
  templateUrl: './update-prodotto.component.html',
  styleUrls: ['./update-prodotto.component.css']
})
export class UpdateProdottoComponent implements OnInit {

id:number=0;
prodotto:Prodotto=new Prodotto(0,'','',0,0,'');
submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,private prodottoService:ProdottoService) { }

  ngOnInit(): void {
    this.submitted=false;
    this.prodotto=new Prodotto(0,'','',0,0,'');
    this.id=this.route.snapshot.params['id'];
    this.prodottoService.getProdotto(this.id)
    .subscribe(data => {
      console.log(data)
      this.prodotto=data;
    }, error => console.log(error));
  }

  updateProdotto(){
    this.prodottoService.updateProdotto(this.id,this.prodotto)
    .subscribe(data => console.log(data), error => console.log(error));
    this.prodotto=new Prodotto(0,'','',0,0,'');
    this.gotoList();
  }

  onSubmit(){
    this.submitted=false;
    this.updateProdotto();
  }

  gotoList(){
    this.router.navigate(['/prodotti']);
  }

}
