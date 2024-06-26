import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProdutoService } from './produto-lista.service';

interface Produto {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})
export class ProdutoListaComponent implements OnInit  {
  produtos: Produto[] = [];
  novoProduto: string = '';

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {

      this.produtoService.getProdutos().subscribe(produtos=>{
        this.produtos = produtos;
      });

  }
}

