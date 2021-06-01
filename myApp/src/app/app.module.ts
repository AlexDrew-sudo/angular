import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ButtonoutputComponent } from './buttonoutput/buttonoutput.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { OutputTextBoxComponent } from './output-text-box/output-text-box.component';
import { RadioComponent } from './radio/radio.component';
import { ManyInputsComponent } from './many-inputs/many-inputs.component';
import { TwoButtonsComponent } from './two-buttons/two-buttons.component';
import { HeroComponent } from './hero/hero.component';




@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    MyComponentComponent,
    ButtonoutputComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    OutputTextBoxComponent,
    RadioComponent,
    ManyInputsComponent,
    TwoButtonsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
