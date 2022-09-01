// OnInit: ciclo de vida do Angular
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

// classe que já vem implementada com o ciclo de vida do Angular
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  // @Input: para receber dados externos, que nesse caso está recebendo "Bem Vindo"
  // posso dizer que ele é do tipo string
  @Input() public title:string = "Bem Vindo";

  // no construtor posso colocar muitas coisas de injeção de depedência para rodar na aplicação
  constructor() { }

  // ngOnInit: assim que iniciar o componenete ele vai fazer alguma coisa
  ngOnInit(): void {
  }

  // usando o Input: entrada de dados
  // identifica as alterações feitas durante a execução, essas alterações sendo externas
  ngOnChanges(): void {
    alert("Foi alterado com sucesso.")
  }

  // vai ser usado quando for destruído algum componente
  // fica observando no ciclo de vida do componente se algo foi destruído
  ngOnDestroy(): void {
    console.log("Deu bom, ele foi destruído!");
  }

}
