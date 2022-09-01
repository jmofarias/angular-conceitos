import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  // criando list que vai ser um array de objetos
  // esse array recebe nome que vai ser uma string
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Joãozinho", idade: 24 },
    { nome: "Mariazinha", idade: 54 },
    { nome: "Antonieta", idade: 104 }
  ];

  // definindo a condição do nome para o SwitchCase
  public nome: string = "João";

  constructor() { }

  ngOnInit(): void {

    // setInterval cria uma função que vai verificar se o valor de condition é true para colocar false, e se é false para colocar true, em 2s
    setInterval(() => {
      if(this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  // método que vai 
  public onClick() {
      if(this.conditionClick){
        this.conditionClick = false;
      } else {
        this.conditionClick = true;
      }
  }

  // método que vai adicionar(push) um item na lista
  public onClickAddList() {
    this.list.push({ nome: "Vitor", idade: 18 });
  }

  // método que vai receber um evento do tipo number e remover (splice) apenas aquele elemento (1)
  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }

}
