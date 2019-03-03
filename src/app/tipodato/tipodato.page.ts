import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipodato',
  templateUrl: './tipodato.page.html',
  styleUrls: ['./tipodato.page.scss'],
})
export class TipodatoPage  {
 public TipoDato;
 public Dato;

 describirdato(TipoDato){
   return this.Dato = typeof this.TipoDato; 
 }
}
