import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-item-detalhe',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-detalhe.component.html',
  styleUrl: './item-detalhe.component.css'
})
export class ItemDetalheComponent {
  produto: any = null;

  constructor(
    private route: ActivatedRoute,
    private listaService: ListaService
  )   {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.listaService.buscarProdutoPorId(Number(id)).subscribe({
        next: (dados) => this.produto = dados,
        error: (erro) => console.error('Deu ruim:', erro),
      });
    }
  }

}
