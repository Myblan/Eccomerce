import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import { CreateProdottoComponent } from './create-prodotto/create-prodotto.component';
import { ProdottoService } from './prodotto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateProdottoComponent } from './update-prodotto/update-prodotto.component';
import { ProdottoDetailsComponent } from './prodotto-details/prodotto-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,ProdottoListComponent, CreateProdottoComponent, UpdateProdottoComponent, ProdottoDetailsComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'prodotti',component:ProdottoListComponent},
      {path:'add',component:CreateProdottoComponent},
      {path:'login',component:LoginComponent}
    ])
  ],
  providers: [ProdottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
