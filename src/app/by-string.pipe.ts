import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porString'
})
export class ByStringPipe implements PipeTransform {

  transform(crypto: any[], a:string): any[] {
    if (a) {
      return crypto.filter((c)=> c.name.toLowerCase().includes(a.toLowerCase()))
    }
    return crypto;
  }

}
