import { Component } from '@angular/core';

@Component({
  selector: 'carrinho',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carrinho: Array<any> = [];
  constructor() {
    try {
      this.carrinho = JSON.parse(sessionStorage.getItem('carrinho') ?? '');
    } catch (error) {
      console.warn('carrinho vazio');
    }
  }
}
