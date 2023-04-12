import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
  private URLbase:string = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  private crypto:any
  private nombre:string = ""

  constructor(private http:HttpClient) {
    this.http.get(this.URLbase).subscribe(
      (cry) => this.crypto = cry
    )
  }
  getUpdate(){
    this.http.get(this.URLbase).subscribe(
      (cry) => this.crypto = cry)
    return this.crypto;
  }


  getCrypto(){
    return this.crypto
  }
  getNombre(){
    return this.nombre
  }
  setNombre(a:string){
     this.nombre = a
  }
  getItemById(id:string) {
    return this.getCrypto().find( (c:any) => c.id == id)
  }


}
