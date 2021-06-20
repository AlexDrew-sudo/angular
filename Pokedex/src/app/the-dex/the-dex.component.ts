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

  constructor(private PokemonService: PokemonService) { }




  ngOnInit(): void {
   
  }
getall(){
  this.PokemonService.getall().subscribe((data)=>{
    
    this.pokemons=data
    
  }, (error) =>{
    console.log(error)
  },()=>{
  
  })

  
}







}
