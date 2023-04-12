import { CarteraService } from './../../../../cartera.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-quantity',
  templateUrl: './asset-quantity.component.html',
  styleUrls: ['./asset-quantity.component.css']
})
export class AssetQuantityComponent {
  @Input() cartera:any
  constructor(private car:CarteraService){}

  changeDisable(a:any){
    a.disabled = !a.disabled
  }
  updateBal(cartera:any, a:string){
    this.car.updateBal(cartera, a)
    this.car.exChange(cartera)
  }
}
