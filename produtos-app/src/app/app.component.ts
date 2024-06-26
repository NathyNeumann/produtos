import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProdutoListaComponent} from './produto-lista/produto-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produtos-app';
}

