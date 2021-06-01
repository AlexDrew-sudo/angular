import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
@Input() buttonText: String;
@Input() header: String;


  constructor() { }

  ngOnInit(): void {
  }

  alertSomething(message: string) {
    alert(message)
  }
  clickB(arr) {
    for (let n of arr) {
      alert(n)
    }
  }
  openAcc(){
   let buttons= document.getElementsByClassName('accordian')
for(let i=0; i<buttons.length; i++){
  buttons.item(i).className="show"
}
  }
}
