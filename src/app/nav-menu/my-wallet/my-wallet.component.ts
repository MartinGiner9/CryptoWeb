import { Component } from '@angular/core';
import { CarteraService } from 'src/app/cartera.service';
import { MarketDataService } from 'src/app/market-data.service';


@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent {
  constructor(private db:CarteraService, private market:MarketDataService){

  }
  getCartera():any{
    return this.db.getCartera()
  }
  getItemById(id:string):any{
    return this.market.getItemById(id)
  }

}
