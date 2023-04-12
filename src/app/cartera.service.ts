import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarteraService {
  private a:any[]=[]
  private exchange = "https://api.freecurrencyapi.com/v1/latest?apikey=WqPneIif2NFFfwy6YaHtUewGT7wX9452XYXPSFVz&currencies=EUR"
  private eur:any = []
  constructor(private http:HttpClient) {
    let savedCars = localStorage.getItem("cartera") || "[]"
    this.a = JSON.parse(savedCars)
    this.http.get(this.exchange).subscribe((ex)=> this.eur = ex)
  }
  addCarterta(b:any){
    if (!this.a.includes(b)) {
      b.cantidad = 0
      b.eur = 0

      this.a.push(b)
      localStorage.setItem("cartera", JSON.stringify(this.a))
    }
  }
  getCartera():Array<any>{
    return  this.a
  }
  isFav(b:any):boolean{
    console.log(this.a.indexOf(b))
    if (this.a.indexOf(b)!=-1) {
      return true
    }else return false
  }
  removeCartera(b:any){
    let posicion = this.a.indexOf(b)
    if (posicion != -1) {
      this.a.splice(posicion,1)
    }
  }
  updateBal(crypto:any, precio:string){
    let cantidad = parseFloat(precio)
    crypto.cantidad= cantidad;

  }
  getBalance(crypto:any){
    this.exChange(crypto)
    return parseFloat(crypto.cantidad)*parseFloat(crypto.current_price)
  }
  exChange(crypto:any){
    let euros =  (parseFloat(crypto.cantidad)*parseFloat(crypto.current_price))/parseFloat(this.eur.data["EUR"])
    crypto.eur= euros
    console.log(crypto)
    return crypto
  }

}
