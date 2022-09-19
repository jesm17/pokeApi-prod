import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  URL = environment.endpoint
  constructor(private http: HttpClient) { }
  getPokemons(l: any, o: any) {
    return this.http.get(`${this.URL}pokemon?limit=${l}&offset=${o}`)
  }
  getOnePokemon(id: any) {
    return this.http.get(`${this.URL}pokemon/${id}`)
  }
  getItems(l: any, o: any) {
    return this.http.get(`https://pokeapi.co/api/v2/item?limit=${l}&offset=${o}`)
  }
  getItem(id:any) {
    return this.http.get(`https://pokeapi.co/api/v2/item/${id}`)
  }
}
