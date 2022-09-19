import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-adivina-pokemon',
  templateUrl: './adivina-pokemon.component.html',
  styleUrls: ['./adivina-pokemon.component.css']
})
export class AdivinaPokemonComponent implements OnInit {
  errores: number = 0
  aciertos: number = 0
  puntaje: number = 0
  image: string = ''
  pokemon: any = {
    name: ''
  }
  pokemonName: string = ''
  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.randomPokemon()
  }

  randomPokemon() {
    var id = Math.floor(Math.random() * 900)
    this.pokemonservice.getOnePokemon(id).subscribe(
      (res: any) => {
        this.image = res.sprites.front_default
        this.pokemonName = res.name

      },
      err => {

      });
  }
  comparate(name: string) {
    if (this.pokemonName === name) {
      this.aciertos++;
      this.randomPokemon()
      this.pokemon.name = ""
    } else {
      this.errores++;
      this.randomPokemon()
      this.pokemon.name = ""
    }
    this.puntaje = this.aciertos - this.errores
  }

}
