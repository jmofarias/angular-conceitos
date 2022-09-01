// esse arquivo é um arquivo do Typescript onde vai ficar nossas classes (lógica/comportamento)
// para dizer que isso é um componente é preciso importar como na linha abaixo
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

// o componente é baseado em um Decorator
@Component({
  // selector: nome da tag que vai ser inicializada
  selector: 'app-root',
  // passando a tag html diretamente aqui (apenas nesse componente)
  // alterando o title diretamente na tag de inicialização
  // evento *ngIF serve para ocultar e desocultar informações na exibiçào do nosso browser
  template: `
    <app-title title="Olá Mundo" *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <br><br>
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <br>
    <app-data-biding></app-data-biding>
    <br>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet>
  `,

  // templateUrl: html do componente
  // templateUrl: './app.component.html',
  // styleUrls: estilo do componente
  // styleUrls: ['./app.component.scss']
})

// classe que será exportada e vai implementar o OnInit
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // método público chamado valor tipado como número, esse valor está sendo passado no template na interpolação {{valor}}
  public valor: number = 1;

  // método destruir que recebe true
  public destruir: boolean = true;

  constructor() {}

  // função adicionar() que vai retonar um number e vai pegar o valor e incrementar mais 1
  public adicionar(): number {
    return (this.valor += 1);
  }

  // void: sem retorno
  // ngOnInit é um evento/função que vai rodar depois que a aplicação começar a funcionar
  ngOnInit(): void {
    //  setTimeout(() => {
    //   console.log(1);
    //  }, 5000)
  }

  // vai ser chamado quando for feito alguma alteração
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // vai ser chamado quando acontecer alguma alteração no content
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // vai ser chamado quando acontecer alguma alteração na view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // ngDoCheck, AfterContentInit, AfterContentChecked, AfterViewInit e AfterViewChecked: eles vão acontecer quando temos alteração dentro da nossa view, componente e dentro de componentes filhos

  // essa função vai pegar o "destruir" e colocar false
  public destruirComponent() {
    this.destruir = false;
  }
}

// vai ser usado quando for destruído algum componente
// fica observando no ciclo de vida do componente se algo foi destruído
