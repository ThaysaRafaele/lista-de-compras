import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  itens = [
    { nome: 'Arroz', quantidade: 5, comprado: false },
    { nome: 'Feijão', quantidade: 3, comprado: false },
    { nome: 'Macarrão', quantidade: 2, comprado: false }
  ]

  marcarComprado(item: any)
  {
    console.log("clicou no botão")
    console.log(item)
    item.comprado = !item.comprado
  }

  adicionarItem(nome: string, quantidade: number) {
    this.itens.push({ nome, quantidade, comprado: false });
  }

  buscarSugestoes() {
    return this.http.get<any[]>(`https://fakestoreapi.com/products`);
  }

  buscarProdutoPorId(id: number) {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
}
