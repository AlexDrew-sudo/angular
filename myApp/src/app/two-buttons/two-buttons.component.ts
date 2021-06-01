import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-buttons',
  templateUrl: './two-buttons.component.html',
  styleUrls: ['./two-buttons.component.css']
})
export class TwoButtonsComponent implements OnInit {
but1= false;
but2= true

  constructor() { }

  ngOnInit(): void {
 
  }

swapButtons(){
  this.but1= !this.but1 // the ! character swaps a boolean 
  this.but2=!this.but2 //so we are saying assign the opposite value to each variable
}
}
