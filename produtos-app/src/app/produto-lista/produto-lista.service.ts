import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface Produto {
  id: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:5234/api/Produto';

  constructor (private http: HttpClient){}

  getProdutos():
  Observable<Produto[]>{return this.http.get<Produto[]>(this.apiUrl)}

  addProduto(nome: string):
  Observable<Produto>{
    return this.http.post<Produto>(this.apiUrl, {nome});
  }
}
