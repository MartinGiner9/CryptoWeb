import { CarteraService } from 'src/app/cartera.service';
import { Component } from '@angular/core';
import { MarketDataService } from 'src/app/market-data.service';

@Component({
  selector: 'app-listadocrypto',
  templateUrl: './listadocrypto.component.html',
  styleUrls: ['./listadocrypto.component.css']
})
export class ListadocryptoComponent {
  constructor(private db:CarteraService, private market:MarketDataService){

  }
  getCartera():any{
    return this.db.getCartera()
  }
  getItemById(id:string):any{
    return this.market.getItemById(id)
  }
}
