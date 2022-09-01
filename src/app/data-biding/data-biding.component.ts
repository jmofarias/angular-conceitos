import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "João";
  public idade: number = 24;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://static.vecteezy.com/system/resources/previews/001/879/863/original/geometric-neon-light-background-free-vector.jpg";
  public imgTitle: string = "Neon";

  // criando um objeto que vai receber x e y do tipo number
  // poderia usar o any em "public position: any" para dizer que pode ser de qualquer tipo
  public position: {x: number, y:number} = { x:0, y:0 };

  constructor() { }

  ngOnInit(): void {
  }

  // função que vai ser acionada no click do botão Evento
  // MouseEvent: evento de mouse 
  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  // função que vai pegar o objeto position definido e colocar o valor do posicionamento do mouse neles
  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
