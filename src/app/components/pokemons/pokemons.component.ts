import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: any = [];
  pokemon: any = [];
  shearh: any = {
    name: ''
  }
  hiddenP:boolean = true;
  onePokemon:any=[]
  hidden: boolean = false;
  l: any = 12
  o: any = 0
  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonServices.getPokemons(this.l, this.o).subscribe(
      (res: any) => {
        for (let i = 0; i < res.results.length; i++) {
          const element = res.results[i];
          this.pokemons = element.name;
          this.pokemonServices.getOnePokemon(this.pokemons).subscribe(
            (res: any) => {
              this.pokemon[i] = res
            }, err => {
              console.log(err);
            }
          )
        }
        console.log(this.pokemon);
      }, err => {
        console.log(err);
      }
    )
  }

  nextPokemon() {
    this.hidden = true
    this.o = this.o + 12;
    this.getPokemons()
  }

  backPokemon() {
    console.log(this.o);
    if (this.o == 12) {
      this.hidden = false
    }
    this.o = this.o - 12;
    this.getPokemons()
  }
  getOnePokemon(id:any){
    this.pokemonServices.getOnePokemon(id).subscribe(
      (res:any)=>{
        console.log(res);
        this.onePokemon[0] = res
        this.hiddenP=false;
      },err=>{
        console.log(err);
        alert('El pokemon '+id+' no existe');
      }
    )
}
}
