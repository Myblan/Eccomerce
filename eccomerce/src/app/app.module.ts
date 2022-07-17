import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import { CreateProdottoComponent } from './create-prodotto/create-prodotto.component';
import { ProdottoService } from './prodotto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProdottoComponent } from './update-prodotto/update-prodotto.component';
import { ProdottoDetailsComponent } from './prodotto-details/prodotto-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,ProdottoListComponent, CreateProdottoComponent, UpdateProdottoComponent, ProdottoDetailsComponent, 
    LoginComponent, HomeComponent,BoardAdminComponent,BoardModeratorComponent,BoardUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'prodotti',component:ProdottoListComponent},
      {path:'add',component:CreateProdottoComponent},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'profile',component:ProfileComponent},
      {path:'register',component:RegisterComponent},
      {path:'boardAdmin',component:BoardAdminComponent},
      {path:'register',component:RegisterComponent},
      {path:'boardUser',component:BoardUserComponent},
      {path:'boardModerator',component:BoardModeratorComponent}
      
    ])
  ],
  providers: [ProdottoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
