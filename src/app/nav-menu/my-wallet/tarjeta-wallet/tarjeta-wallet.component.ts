import { Component,Input } from '@angular/core';
import { CarteraService } from 'src/app/cartera.service';

@Component({
  selector: '[app-tarjeta-wallet]',
  templateUrl: './tarjeta-wallet.component.html',
  styleUrls: ['./tarjeta-wallet.component.css']
})
export class TarjetaWalletComponent {
  @Input () cartera:any
  constructor(private db:CarteraService){

  }
  getBalance(cartera:string){
    this.exChange(cartera)
    return this.db.getBalance(cartera)
  }
  exChange(cartera:any){
    return this.db.exChange(cartera)
  }
}
