import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { NavComponent } from './components/nav/nav.component';
import { AdivinaPokemonComponent } from './components/adivina-pokemon/adivina-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemsComponent } from './components/items/items.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component'
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    NavComponent,
    AdivinaPokemonComponent,
    FooterComponent,
    ItemsComponent,
    DarkModeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
