import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
@Input() headerText: String;
@Input() pText: String;


  constructor() { }

  ngOnInit(): void {
  }

}
