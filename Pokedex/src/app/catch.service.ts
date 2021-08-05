import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from './Models/pokeModel';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class CatchService {
  currentPokemon$: Subject<any> = new Subject<any>();
  activePokemon
  constructor(private PokemonService: PokemonService) { }

  getCurrentPokemon() {
    return this.activePokemon
  }
  setCurrentPokemon(pokemon) {
    this.activePokemon = pokemon
    this.currentPokemon$.next(this.activePokemon)
  }
}

