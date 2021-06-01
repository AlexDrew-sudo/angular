import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'output-text',
  templateUrl: './output-text-box.component.html',
  styleUrls: ['./output-text-box.component.css']
})
export class OutputTextBoxComponent implements OnInit {
@Output() textEmit: EventEmitter<string>;
public text: string;

  constructor() { 
    this.textEmit= new EventEmitter<string>(); //put in the constructor so it is always initialized 
  }

  ngOnInit(): void {
  }
  emitText(){
    this.textEmit.next(this.text);
  }

//button emits value
//value exists
//bind that value to text box 
}
