import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Output() radioEmit: EventEmitter<number>;
num1: number;
num2: number;
  constructor() { 
    this.radioEmit= new EventEmitter<number>();
    
  }

  ngOnInit(): void {
  }
  emitRadio(){
let avg=(Number(this.num1)+Number(this.num2))/2
this.radioEmit.next(avg)
  }

}
