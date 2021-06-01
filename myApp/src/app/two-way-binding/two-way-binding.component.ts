import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  boundText = ""
  constructor() { }

  ngOnInit(): void {
  }

}
