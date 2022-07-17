import { Component } from '@angular/core';
import { ProdottoService } from './prodotto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProdottoService]
})
export class AppComponent {
  title = 'ecomerce';
  price=10;
}
