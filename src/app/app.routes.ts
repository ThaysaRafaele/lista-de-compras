import { Routes } from '@angular/router';
import { ItemListaComponent } from './component/item-lista/item-lista.component';
import { ItemDetalheComponent } from './component/item-detalhe/item-detalhe.component';

export const routes: Routes = [
  {path: '', component: ItemListaComponent},
  {path: 'item/:id', component: ItemDetalheComponent},
];
