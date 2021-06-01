import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-way',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {
  public boundText: string ; //the public is optional 
  constructor() { }

  ngOnInit(): void {
  }
  updateText(evt: string){
    this.boundText=evt;
  }

}
