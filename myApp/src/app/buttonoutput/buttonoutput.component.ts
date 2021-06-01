import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'buttonoutput',
  templateUrl: './buttonoutput.component.html',
  styleUrls: ['./buttonoutput.component.css']
})
export class ButtonoutputComponent implements OnInit {
  
@Output() buttonEmit = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  sendOutput(value:boolean){
    console.log("button emitting")
    this.buttonEmit.next(value)
    
  }

}
