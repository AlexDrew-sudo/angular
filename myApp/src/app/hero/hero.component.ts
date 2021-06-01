import { Component, Input, OnInit } from '@angular/core';
import { MyComponentComponent } from '../my-component/my-component.component';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public style: {}

  @Input() hero: {
    heroName: string,
    realName: string,
    power: string,
    legs: number,
    cape: boolean,
    species: string,
    color1: string,
    color2: string,
    color3: string
  }
  constructor() { }


  ngOnInit(): void {
  }
  ngOnChanges(){
    this.style = {
      //  'background-color': this.hero.color1,
      'background-image': 'linear-gradient(to bottom right,' + this.hero.color1 + ',' + this.hero.color2 + ',' + this.hero.color3
  }}

}
