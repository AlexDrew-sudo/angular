import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Pokemon } from '../Models/pokeModel';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-the-dex',
  templateUrl: './the-dex.component.html',
  styleUrls: ['./the-dex.component.css']
})
export class TheDexComponent implements OnInit {

pokemons: Pokemon
position: number //pokemonID-1 , the position of a pokemon in pokemons array

  constructor(private PokemonService: PokemonService) { }




  ngOnInit(): void {
   this.getall()
   this.position=0
  }
getall(){
  this.PokemonService.getall().subscribe((data)=>{
    
    this.pokemons=data
    
  }, (error) =>{
    console.log(error)
  },()=>{
  
  })

  
}
back(){
  if(this.position==0){
    this.position=150
    
  }else{
    this.position-=1
  }
}
next(){
  if(this.position==150){
    this.position=0
    
  } else{
    this.position+=1
    
  }
}
evolve(){
  console.log(this.pokemons[this.position].evolvesFromId)
  this.position=this.pokemons[this.position].evolvesFromId-1
}







}
