import { Component, Input } from '@angular/core';
import { EventEmitter } from 'stream';
import { Output } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {
  @Input() fase:string = "fase 1"
  @Input() dicaFase= [{}]
  @Input() imagem:string = ""
  teste(){
    console.log("aaaa")
  }


}