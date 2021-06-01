import { Component } from '@angular/core';
import {HEROES} from './heros/heroes'; // does not do anything unless the property actually exists in that location at runtime 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  text;
  radio;
  selectedHero = null;
  heroes: any;
 
  ngOnInit() {
    this.heroes = HEROES;
    
  }


  alertOutput(evt) {
    alert("The app component is alerting:" + evt);
  }
  updateText(evt) {
    this.text = evt;
  }
  updateRadio(evt) {
    this.radio = evt;

  }
  selectHero(evt) {
    this.selectedHero = evt
    
   
  }
}
