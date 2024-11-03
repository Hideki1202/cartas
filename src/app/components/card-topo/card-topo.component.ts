import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-topo',
  templateUrl: './card-topo.component.html',
  styleUrl: './card-topo.component.css'
})
export class CardTopoComponent {
  @Input() nome:string= "PESSOA"
  @Input() dicas:string[]= []
  @Input() isVirado: boolean = false;
  @Input() numFase: number=0
  @Input() imagem: string= "";
  @Input() classe:string='classe1'
  @Input() resposta: string= ''
  @Input() pergunta: string = ''
  @Input() tipo: string = ''

  virar() {
    this.isVirado = !this.isVirado; 
    console.log("Virado: ", this.isVirado);
  }

}