import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatchService } from '../catch.service';
import { Pokemon } from '../Models/pokeModel';
import { User } from '../Models/usermodel';
import { PokemonService } from '../pokemon.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-catch-pokemon',
  templateUrl: './catch-pokemon.component.html',
  styleUrls: ['./catch-pokemon.component.css']
})
export class CatchPokemonComponent implements OnInit {
  pokemon: Pokemon
  pokeballCount: number
  pokeballType
  currentPokeball
  numBerries: number
  user: User
  hasBerry: boolean = false
  caught: boolean

  constructor(
    private PokemonService: PokemonService,
    private userService: UserService,
    private catchService: CatchService,
    private router: Router) { }

  ngOnInit(): void {
    this.pokemon = this.catchService.getCurrentPokemon()
    this.user = this.userService.getActiveUser()
    this.pokeballCount = this.user.pokeballCount
    this.PokemonService.getBerriesById(this.user.id).subscribe(res => {
      this.numBerries = res.quantity
    }, (err) => {
      console.log(err)
    })
  }
  switchPokeball() {

  }

  throwPokeball() {

    this.pokeballCount--;
    this.user.pokeballCount = this.pokeballCount
    this.catchAttempt()
  }
  catchAttempt() {
    let catchBody = {
      userId: this.user.id,
      pokemonId: this.pokemon.id
    }


    if (this.hasBerry) {
      for (let i = 0; i < 10; i++) {
        if ((Math.floor(Math.random() * 10)) == 5) {

          this.PokemonService.catchPokemon(catchBody).subscribe(res => {
            this.caught=true

          })
          break
        }
      }
    } else {
      console.log("no berry")
      if ((Math.floor(Math.random() * 10)) == 5) {

        this.PokemonService.catchPokemon(catchBody).subscribe(res => {
          this.caught=true
        
      
          let body = {
            pokeballCount: this.user.pokeballCount,
            userId: this.user.id
          }
          this.PokemonService.updateBalls(body).subscribe(res => {
            console.log(res)
          }, err => {
            console.error(err)
          })
        

        })
      }
    }

  }

  giveBerry() {
    this.numBerries--;
    let body={
      numberries: this.numBerries,
      userId: this.user.id
    }
    this.hasBerry = true
    this.PokemonService.updateBerriesById(body).subscribe((res)=>{

    })
  }
}
