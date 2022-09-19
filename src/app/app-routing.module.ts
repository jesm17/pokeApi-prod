import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdivinaPokemonComponent } from './components/adivina-pokemon/adivina-pokemon.component';
import { ItemsComponent } from './components/items/items.component';
import { NavComponent } from './components/nav/nav.component';

import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [

  {
    path: 'adivinaPokemon',
    component: AdivinaPokemonComponent
  },
  {
    path: 'home',
    component: PokemonsComponent
  },
  {
    path: '',
    component:PokemonsComponent
  },{
    path:'items',
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
