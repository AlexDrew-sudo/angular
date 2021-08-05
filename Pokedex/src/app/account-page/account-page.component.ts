import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Models/pokeModel';
import { PokemonService } from '../pokemon.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  getColor(type) {
    switch (type) {
      case "Electric":
        return 'yellow';
      case "Normal":
        return "brown";
      case "Flying":
        return "teal";
      case "Grass":
        return "var(--darkerGreen)";
      case "Bug":
        return "var(--lighterGreen)";
      case "Fire":
        return "red";
      case "Water":
        return "blue";
      case "Fighting":
        return "Brown";
      case "Psychic":
        return "purple";
        case "Poison":
          return "var(--darkPurp)"

    }
  }
  types = []
  pokemons: Pokemon[] = [];
  allPokemon
  caughtArray
  numCaught: number = 0
  user
  typePokemon: Pokemon[] = [];
  all;

  constructor(private pokemonService: PokemonService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getActiveUser()
    this.pokemonService.getall().subscribe((res) => {
      this.allPokemon = res
    })
    this.pokemonService.getCaughtbyId(this.user.id).subscribe(res => {
      
      this.caughtArray = res
      console.log(this.caughtArray)
      for (let i = 0; i < this.allPokemon.length; i++) {
        for (let j = 0; j < this.caughtArray.length; j++) {
          if (this.allPokemon[i].id == this.caughtArray[j]) {
            this.pokemons.push(this.allPokemon[i])
            this.types.push(this.allPokemon[i].type1)
            this.numCaught++
          }
        }
      }


    })
  }

  switchType(type) {
   console.log(type)

    this.pokemons = []
    for (let i = 0; i < this.caughtArray.length; i++) {
      if (this.caughtArray[i].type1 == type) {
        this.pokemons.push(this.caughtArray[i])
        console.log(this.pokemons)

      }
    }
    console.log(this.pokemons)

  }
  showAll() {
    this.all = true
  }

}
