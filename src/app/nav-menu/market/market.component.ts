import { Component } from '@angular/core';
import { MarketDataService } from 'src/app/market-data.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {

  constructor(private market:MarketDataService){

  }

  getCrypto():any{
    return this.market.getCrypto()
  }
  getUpdate(){
    this.market.getUpdate();
  }
  setNombre(a:string){
    this.market.setNombre(a)
  }
  getNombre(){
    return this.market.getNombre()
  }
}
