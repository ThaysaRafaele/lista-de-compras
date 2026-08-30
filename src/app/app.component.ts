import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListaComponent } from './component/item-lista/item-lista.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-compras';
}
