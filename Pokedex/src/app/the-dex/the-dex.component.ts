import { Component, OnInit } from '@angular/core';
import { CatchService } from '../catch.service';
import { Pokemon } from '../Models/pokeModel';
import { User } from '../Models/usermodel';
import { PokemonService } from '../pokemon.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-the-dex',
  templateUrl: './the-dex.component.html',
  styleUrls: ['./the-dex.component.css']
})
export class TheDexComponent implements OnInit {
  user
  pokemons: Pokemon[]
  position: number //pokemonID-1 , the position of a pokemon in pokemons array
  caughtPokemon
  constructor(
    private PokemonService: PokemonService,
    private catchService: CatchService,
    private userService: UserService
  ) { }




  ngOnInit(): void {
    this.user=this.userService.getActiveUser()
    console.log(this.user)
    this.getall()
   
    this.position = 0


    
  
  }
  getall() {
    this.PokemonService.getall().subscribe((data) => {

      this.pokemons = data
      this.PokemonService.getCaughtbyId(this.user.id).subscribe(res => {
        this.caughtPokemon = res
        for(let i=0;i<this.pokemons.length;i++){
          for(let j=0;j<this.caughtPokemon.length;j++){
            if(this.pokemons[i].id==this.caughtPokemon[j]){
              this.pokemons[i].caught=true
              console.log(this.pokemons[i])
            }
          }
        }
      }, (err) => {
        console.log(err)
      })
    }, (error) => {
      console.log(error)
    }, () => {

    })


  }
  back() {
    if (this.position == 0) {
      this.position = 150

    } else {
      this.position -= 1
    }
  }
  next() {
    this.position = (this.position + 1) % 151;
  }
  evolveTo() {
   let id= this.pokemons[this.position].evolesToID
   if(id){
     this.position=id-1
   }
  
  }
  evolveFrom(){

  }
  sendToCatch() {
    this.catchService.setCurrentPokemon(this.pokemons[this.position])

  }
  getUser() {

  }








}
