import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../../services/lista.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-lista',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './item-lista.component.html',
  styleUrl: './item-lista.component.css'
})
export class ItemListaComponent implements OnInit {
  constructor(public listaService: ListaService) { }

  sugestoes: any[] = [];

  formItem = new FormGroup({
    nome: new FormControl('', Validators.required),
    quantidade: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  ngOnInit(): void {
    this.listaService.buscarSugestoes().subscribe({
      next: (data) => this.sugestoes = data,
      error: (error) => console.error('Deu ruim:', error),
    });
  }

  enviar(){
    if (this.formItem.valid) {
      this.listaService.adicionarItem(
        this.formItem.value.nome!,
        this.formItem.value.quantidade!
      );
      this.formItem.reset({ nome: '', quantidade: 1 });
    }
  }

}
