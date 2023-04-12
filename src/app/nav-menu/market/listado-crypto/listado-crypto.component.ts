import { Component, Input } from '@angular/core';
import { CarteraService } from 'src/app/cartera.service';

@Component({
  selector: 'app-listado-crypto',
  templateUrl: './listado-crypto.component.html',
  styleUrls: ['./listado-crypto.component.css']
})
export class ListadoCryptoComponent {
  @Input() cry:any;
  constructor(private cartera:CarteraService){

  }
  addCarterta(b:string){
    this.cartera.addCarterta(b)
  }
  getCartera():Array<string>{
    return  this.cartera.getCartera()
  }
  isFav(a:any):boolean{
    return this.cartera.isFav(a)
  }
  removeCartera(a:any){
    this.cartera.removeCartera(a)
  }
}
