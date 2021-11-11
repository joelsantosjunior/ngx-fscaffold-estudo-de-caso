import { Component } from '@angular/core';

interface Produto {
  nome: string;
  id: number;
  preco: number;
}

@Component({
  selector: 'produtos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  produtos: Array<Produto> = [
    { id: 1, nome: 'Casaco', preco: 10 },
    { id: 2, nome: 'Camiseta', preco: 10 },
    { id: 3, nome: 'Sapato', preco: 10 },
    { id: 4, nome: 'Jeans', preco: 10 },
  ];

  adicionarProduto(produto: Produto) {
    let carrinho;
    try {
      carrinho = JSON.parse(this.carrinho);
    } catch (error) {
      carrinho = [];
    }

    carrinho.push(produto);

    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  get carrinho (): string {
    return sessionStorage.getItem('carrinho') ?? ''
  }
}
