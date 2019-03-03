import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public base;
  public altura;
  public area;
  public perimetro;
  calcularArea(altura, base){
    return this.area = this.base * this.altura;
  }
  calculaPerimetro(altura, base){
    return this.perimetro = 2*(parseFloat(this.base) + parseFloat(this.altura));
  }
}
